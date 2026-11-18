# microplastics.cat

Lloc web informatiu sobre microplàstics en català. Sense ànim de lucre, basat en evidència científica.

Generat amb [Eleventy](https://www.11ty.dev/) i publicat a GitHub Pages.

## Estructura

```
microplastics/
├── src/                          # Fonts del lloc (input d'Eleventy)
│   ├── _layouts/base.njk         # Plantilla comuna: <head>, SEO, JSON-LD, nav, footer
│   ├── index.html                # Pàgina principal (inclou el formulari de la newsletter)
│   ├── <seccio>/index.html       # Pàgines principals (què són, salut, regulació…)
│   ├── blog/                     # Índex del blog i un directori per article
│   ├── referencies/              # Bibliografia consolidada
│   ├── 404.html                  # Pàgina d'error
│   ├── feed.njk                  # Genera /feed.xml (Atom)
│   ├── sitemap.njk               # Genera /sitemap.xml
│   ├── llms.txt, robots.txt, favicon.ico
│   └── assets/                   # CSS, fonts, imatges, icones i la guia PDF
├── drafts/                       # Esborranys d'articles (no es publiquen)
├── scripts/check_site.py         # Comprovacions del lloc generat
└── .github/workflows/
    ├── static.yml                # Build + desplegament a GitHub Pages (push a main)
    └── check.yml                 # Build + comprovacions a cada pull request
```

## Desenvolupament local

```bash
npm install
npm start            # servidor local a http://localhost:8080 amb recàrrega
npm run build        # genera el lloc a _site/
python3 scripts/check_site.py _site   # mateixes comprovacions que la CI
```

## Desplegament

- Cada push a `main` executa `static.yml`: construeix el lloc amb Eleventy i publica `_site/` a GitHub Pages.
- Cada pull request a `main` executa `check.yml`: construeix el lloc i comprova que el JSON-LD és vàlid, que no hi ha enllaços interns trencats ni àncores inexistents, que cada pàgina té un sol `<main>` i que `feed.xml` i `sitemap.xml` són XML vàlid.
- Treballa sempre en una branca i obre un pull request; no facis push directe a `main`.

## Publicar un article del blog

L'índex del blog es manté a mà. Per publicar un esborrany de `drafts/`:

1. Verifica totes les marques `[VERIFICAR]` i les fonts de l'esborrany.
2. Crea `src/blog/<slug>/index.html` seguint l'estructura d'un article existent. Al front matter, afegeix-hi `date`, `date_published` (format `"AAAA-MM-DD"`) i `tags: post` perquè aparegui al feed, al sitemap i a l'esquema `BlogPosting`.
3. Afegeix l'article a `src/blog/index.html` i a `src/llms.txt`.
4. Si cita estudis nous, afegeix-los a `src/referencies/index.html`.

## Newsletter

El formulari de subscripció és a `src/index.html` i envia les dades a [Acumbamail](https://acumbamail.com) (llista amb doble opt-in). La Content-Security-Policy de `base.njk` permet `form-action` i `connect-src` cap a `acumbamail.com`; si canvies de proveïdor, actualitza-la.

## Domini

- El domini personalitzat configurat a GitHub Pages és `www.microplastics.cat` (Settings → Pages), amb HTTPS forçat. Com que el desplegament es fa amb GitHub Actions, no cal cap fitxer `CNAME` al repositori.
- DNS al registrador:
  - `www` → CNAME `alexrodba.github.io`
  - Domini arrel `microplastics.cat` → registres A de GitHub Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (i els AAAA `2606:50c0:8000::153` a `2606:50c0:8003::153`). Així GitHub redirigeix el domini arrel cap a `www`.
