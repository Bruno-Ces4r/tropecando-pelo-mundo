# CLAUDE.md — working agreement

## Source of truth
`docs/` is the source of truth for this project. Before making changes, consult:
- `docs/PRD.md` — product requirements (problem, goals, non-goals, monetization).
- `docs/TECH_SPEC.md` — stack, content structure, i18n, the paid-PDF unlock flow.
- `docs/TASKS.md` — the sequential backlog with acceptance criteria per task.

If a request conflicts with these docs, flag the conflict and propose updating the docs first —
don't silently diverge from them.

## How we build
- **Small, focused slices.** Do one task from `docs/TASKS.md` at a time, in order. Don't pull work
  forward from later phases unless we've agreed to reorder.
- **Propose before large changes.** For anything beyond a small, contained edit — new dependencies,
  structural changes, changing the stack, reworking multiple files — describe the approach and wait
  for an OK before implementing.
- **Respect the non-goals.** This is a deliberately lightweight companion project, not an
  engineering showcase (that role belongs to a separate project). Prefer simplicity and speed of
  shipping over sophistication. Everything must stay free to run.

## Conventions
- **Content/copy:** Portuguese (PT-BR is the default language; EN is the second).
- **Code, comments, docs:** English.
- **i18n:** page content lives once per language under `src/pt/` and `src/en/`, sharing templates
  in `src/_includes/`. Shared UI strings live in `src/_data/i18n.js`. Add a new language by adding
  it to `src/_data/site.js` and creating the matching `src/<code>/` folder.

## Project layout
```
docs/                 project documentation (source of truth)
src/                  Eleventy source
  _data/              site.js (config), i18n.js (UI strings)
  _includes/          shared templates (base.njk)
  pt/  en/            per-language pages
  assets/             css and static files
eleventy.config.js    build config (src -> _site)
.github/workflows/    build + deploy to GitHub Pages
```

## Commands
- `npm run build` — build to `_site/`.
- `npm run serve` — local dev server with live reload.
- `npm run clean` — remove `_site/`.

Deploys happen automatically via GitHub Actions on push to `main`. `_site/` is not committed.
