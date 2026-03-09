# microplastics.cat

Lloc web informatiu sobre microplàstics en català.

## Estructura

```
microplastics/
├── index.html                    # Pàgina principal
├── politica-de-privacitat.html   # Política de privacitat (RGPD)
├── .nojekyll                     # Evita que GitHub Pages processi amb Jekyll
└── .github/
    └── workflows/
        └── deploy.yml            # GitHub Actions: deploy estàtic a GitHub Pages
```

## Desplegament

El lloc es desplega automàticament a GitHub Pages quan fas push a `main`.

URL: https://alexrodba.github.io/microplastics (o microplastics.cat un cop configuris el domini)

## Configurar la newsletter (Brevo)

1. Crea un compte gratuït a [brevo.com](https://brevo.com)
2. Ves a **Settings → API Keys** i genera una clau
3. Ves a **Contacts → Lists**, crea una llista i apunta el seu ID
4. Activa el **doble opt-in** a la llista
5. Obre `index.html` i substitueix al final de l'script:
   - `YOUR_BREVO_API_KEY_HERE` → la teva clau API
   - `0` → l'ID de la teva llista

## Domini personalitzat (microplastics.cat)

1. Al teu registrador de dominis, afegeix un registre CNAME:
   - Nom: `www` → `alexrodba.github.io`
   - O registres A per al domini arrel apuntant a les IPs de GitHub Pages
2. Al repo de GitHub: Settings → Pages → Custom domain → `microplastics.cat`
3. Activa "Enforce HTTPS"

El fitxer `CNAME` es genera automàticament pel workflow.
