#!/usr/bin/env python3
"""Sanity checks for the built site (run after `npm run build`).

Usage: python3 scripts/check_site.py [_site]

Checks:
  - every <script type="application/ld+json"> block is valid JSON
  - every internal link/asset (href/src) points to a file that exists
  - every #fragment in an internal link matches an id on the target page
  - every HTML page has exactly one <main>
  - feed.xml and sitemap.xml are well-formed XML

Standard library only, so it runs on a bare CI runner.
"""
import json
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
from xml.etree import ElementTree

SKIP_SCHEMES = ("http:", "https:", "mailto:", "tel:", "data:", "javascript:")
LINK_ATTRS = {"a": "href", "link": "href", "script": "src", "img": "src",
              "source": "src", "iframe": "src"}


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.links, self.jsonld = set(), [], []
        self.main_count = 0
        self._in_jsonld = False
        self._buf = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get("id"):
            self.ids.add(a["id"])
        if tag == "a" and a.get("name"):
            self.ids.add(a["name"])
        if tag == "main":
            self.main_count += 1
        attr = LINK_ATTRS.get(tag)
        if attr and a.get(attr):
            self.links.append(a[attr].strip())
        if tag == "script" and a.get("type") == "application/ld+json":
            self._in_jsonld, self._buf = True, []

    def handle_data(self, data):
        if self._in_jsonld:
            self._buf.append(data)

    def handle_endtag(self, tag):
        if tag == "script" and self._in_jsonld:
            self.jsonld.append("".join(self._buf))
            self._in_jsonld = False


def resolve(site, page, link):
    """Map an internal URL to a file in the build, or None if not internal."""
    if not link or link.startswith(SKIP_SCHEMES) or link.startswith("//"):
        return None
    parts = urlsplit(link)
    path, fragment = unquote(parts.path), unquote(parts.fragment)
    if not path:  # same-page fragment, e.g. "#main"
        return page, fragment
    base = site if path.startswith("/") else page.parent
    target = (base / path.lstrip("/")).resolve()
    if path.endswith("/") or target.is_dir():
        target = target / "index.html"
    return target, fragment


def main():
    site = Path(sys.argv[1] if len(sys.argv) > 1 else "_site").resolve()
    if not site.is_dir():
        sys.exit(f"Build directory not found: {site} (run `npm run build` first)")

    errors = []
    pages = {}
    for f in sorted(site.rglob("*.html")):
        p = PageParser()
        p.feed(f.read_text(encoding="utf-8"))
        pages[f.resolve()] = p

    for f, p in pages.items():
        rel = f.relative_to(site)
        for i, block in enumerate(p.jsonld, 1):
            try:
                json.loads(block)
            except json.JSONDecodeError as e:
                errors.append(f"{rel}: JSON-LD block {i} is invalid ({e})")
        if p.main_count != 1:
            errors.append(f"{rel}: expected exactly one <main>, found {p.main_count}")
        for link in dict.fromkeys(p.links):  # dedupe, keep order (nav + footer repeat links)
            resolved = resolve(site, f, link)
            if resolved is None:
                continue
            target, fragment = resolved
            if not target.exists():
                errors.append(f"{rel}: broken link -> {link}")
            elif fragment and target in pages and fragment not in pages[target].ids:
                errors.append(f"{rel}: missing anchor -> {link}")

    for name in ("feed.xml", "sitemap.xml"):
        xml_file = site / name
        if not xml_file.exists():
            errors.append(f"{name}: missing")
            continue
        try:
            ElementTree.parse(xml_file)
        except ElementTree.ParseError as e:
            errors.append(f"{name}: invalid XML ({e})")

    jsonld_total = sum(len(p.jsonld) for p in pages.values())
    links_total = sum(len(p.links) for p in pages.values())
    print(f"Checked {len(pages)} pages, {jsonld_total} JSON-LD blocks, {links_total} links.")
    if errors:
        print(f"\n{len(errors)} problem(s):")
        for e in errors:
            print(f"  - {e}")
        sys.exit(1)
    print("All checks passed.")


if __name__ == "__main__":
    main()
