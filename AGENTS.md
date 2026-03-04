# Repository Guidelines

## Project Structure & Module Organization
This repository is a static marketing site deployed with GitHub Pages.

- `index.html`: Main landing page (hero, features, pricing, testimonials).
- `privacy/index.html`, `terms/index.html`, `contact/index.html`: Legal and support pages.
- `assets/css/styles.css`: Shared site styles.
- `assets/js/main.js`: Small progressive-enhancement scripts (reveal animation, footer year).
- `assets/img/` and `assets/inspiration/`: Visual assets and design references.
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment workflow.
- `CNAME`: Custom domain binding (`raceautopsy.hit2.dk`).

Keep pages flat and predictable. Prefer shared styling/scripts over page-specific duplication.

## Build, Test, and Development Commands
No build step is required.

- `python3 -m http.server 8000`: Run a local static server.
- Open `http://localhost:8000`: Preview all routes and links.
- `rg -n "TODO|\\[COMPANY_NAME\\]" .`: Find unreplaced placeholders before publishing.

Deployment is automatic on pushes to `main` via GitHub Actions.

## Coding Style & Naming Conventions
- Use semantic HTML5 (`header`, `main`, `section`, `footer`) and accessible labels.
- Use 2-space indentation for HTML/CSS/JS.
- Keep CSS class names descriptive and kebab-case (e.g., `feature-card`, `price-card`).
- Keep JS framework-free and minimal; prefer progressive enhancement.
- Use relative internal links (e.g., `../terms/`, `privacy/`) for GitHub Pages compatibility.

## Testing Guidelines
There is no formal test framework yet. Validate changes with:

- Manual responsive checks (mobile and desktop layouts).
- Keyboard navigation and visible focus states.
- Route checks for `/`, `/privacy/`, `/terms/`, `/contact/`.
- Broken-link scan by clicking all nav/footer CTAs.

## Commit & Pull Request Guidelines
Project history is still minimal; use clear, imperative commit messages:

- `feat: update hero copy for Strava positioning`
- `fix: correct relative links on legal pages`

For pull requests, include:
- Short summary of user-facing changes.
- Files changed and why.
- Screenshots for visual updates (desktop + mobile).
- Notes on placeholders, legal text, or domain/deploy impacts.

## Security & Configuration Tips
- Do not commit secrets or API keys.
- Keep `CNAME` correct for production domain changes.
- Treat legal templates as placeholders until reviewed by legal counsel.
