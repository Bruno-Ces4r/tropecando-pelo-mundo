# Bruno Tropeçando pelo Mundo

Companion site for the travel channel — budget travel guides organized by country and city,
with optional paid PDF guides per city. Built with Next.js (static export), bilingual (PT/EN),
free to host on GitHub Pages. Also intended as a portfolio piece — see `docs/PRD.md` for the
reasoning behind that.

Full context lives in [`docs/`](./docs): [PRD](./docs/PRD.md),
[technical spec](./docs/TECH_SPEC.md), [tasks](./docs/TASKS.md). Working agreement in
[`CLAUDE.md`](./CLAUDE.md).

## Develop

```bash
npm install
npm run dev     # local dev at http://localhost:3000
npm run build   # static export to out/
```

To test exactly as CI builds it (with the GitHub Pages subpath):

```bash
NEXT_PUBLIC_BASE_PATH=/tropecando-pelo-mundo npm run build
```

## Deploy

Pushing to `main` builds the site (static export) and publishes it to GitHub Pages via GitHub
Actions (`.github/workflows/deploy.yml`). To enable it the first time: in the repo settings,
under **Pages → Build and deployment → Source**, choose **GitHub Actions**.

The site is served from `/<repo-name>/`, so CI builds with `NEXT_PUBLIC_BASE_PATH=/tropecando-pelo-mundo`.
If you rename the repo, update that value in the workflow.

## Structure

- `app/[lang]/` — per-language pages and layout (App Router).
- `lib/` — i18n config and dictionary loader.
- `dictionaries/` — `pt.json`, `en.json` — UI copy per language.
- `public/` — static files.
