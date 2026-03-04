# Race Autopsy Landing Page

Static marketing website for the Race Autopsy app. Includes landing page, pricing, store download links, and legal/support pages.

## Pages

- `/` landing page
- `/privacy/` privacy policy (starter template)
- `/terms/` terms of service (starter template)
- `/contact/` support/contact details

## Local preview

Open `index.html` directly in a browser, or run a simple server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy with GitHub Pages

This repo uses `.github/workflows/deploy-pages.yml` to publish from `main`.

1. Push repository to GitHub.
2. In repository settings, open `Pages`.
3. Set source to `GitHub Actions`.
4. Push to `main` (or run workflow manually).

## Custom domain setup

1. Replace contents of `CNAME` with your real domain (for example `www.yourdomain.com`).
2. Configure DNS:
   - `www` subdomain: create `CNAME` record to `<your-github-username>.github.io`.
   - Apex/root domain: use your DNS provider's ALIAS/ANAME flattening to the same target (or provider-specific GitHub instructions).
3. In GitHub repo settings under `Pages`, confirm custom domain.
4. Enable `Enforce HTTPS` after DNS resolves.

## Replace placeholders before launch

- `CNAME` domain (`www.example.com`)
- App Store URL in `index.html`
- Contact emails in `contact/index.html`
- Legal placeholders:
  - `[COMPANY_NAME]`
  - `[CONTACT_EMAIL]`
  - `[JURISDICTION]`
  - `[COMPANY_ADDRESS]`

## Notes

- Legal templates are starting points only and should be reviewed by legal counsel.
- Uses plain HTML/CSS/JS for minimal dependency overhead and GitHub Pages compatibility.
