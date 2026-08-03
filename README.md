# Guia do Nômade

Companion site for the travel channel **Bruno Tropeçando pelo Mundo** — budget travel guides
organized by country and city, with optional paid PDF guides per city. Static, bilingual (PT/EN),
free to host on GitHub Pages.

Full context lives in [`docs/`](./docs): [PRD](./docs/PRD.md),
[technical spec](./docs/TECH_SPEC.md), [tasks](./docs/TASKS.md). Working agreement in
[`CLAUDE.md`](./CLAUDE.md).

## Develop

```bash
npm install
npm run serve   # local dev at http://localhost:8080
npm run build   # build to _site/
```

## Deploy

Pushing to `main` builds the site and publishes it to GitHub Pages via GitHub Actions
(`.github/workflows/deploy.yml`). To enable it the first time: in the repo settings, under
**Pages → Build and deployment → Source**, choose **GitHub Actions**.

The site is served from `/<repo-name>/`, so the build passes `--pathprefix=/guia-do-nomade/`.
If you rename the repo, update that flag in the workflow.

## Structure

- `src/pt/`, `src/en/` — per-language pages.
- `src/_includes/` — shared templates.
- `src/_data/` — `site.js` (config) and `i18n.js` (interface strings).
- `src/assets/` — CSS and static files.
