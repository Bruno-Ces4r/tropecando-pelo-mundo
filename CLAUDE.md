# CLAUDE.md — working agreement

> Skills live in `<repo>/.claude/skills/` (root) and their descriptions are already
> auto-loaded — not repeated here. Invoke the skill when the task calls for it; it brings the
> step-by-step.

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
- **Portfolio + growth is now an explicit goal** (see PRD note), alongside staying free to run.
  This project uses Next.js on purpose — heavier than the content strictly needs — as a deliberate
  trade for market reach and room to grow into SSR/API routes later without a rewrite. Don't use
  this as license to add complexity beyond what a task actually calls for.

## Conventions
- **Content/copy:** Portuguese (PT-BR is the default language; EN is the second).
- **Code, comments, docs:** English.
- **i18n:** App Router with a dynamic `app/[lang]/` segment (see `lib/i18n.ts` for the locale
  list). Copy lives once per language in `dictionaries/<locale>.json`, loaded via
  `lib/dictionaries.ts`. Add a new language by adding it to `lib/i18n.ts` and creating the
  matching dictionary file.
- **Static export only.** `next.config.mjs` sets `output: 'export'` — avoid APIs that require a
  Node server (route handlers doing server-side work, `next/image` optimization, etc.) unless
  we've explicitly decided to move off static export.
- **Commits:** plain imperative English summary, no type/scope prefix (skill `commit`) —
  **never** Claude/Anthropic as author/co-author.

## Project layout
```
docs/                 project documentation (source of truth)
app/
  layout.tsx           root layout (html/body)
  page.tsx             redirects "/" to the default locale
  [lang]/
    layout.tsx          per-locale layout: header, footer, language switch
    page.tsx             home page
  globals.css           base styles
lib/                   i18n config + dictionary loader
dictionaries/          pt.json, en.json — UI copy per language
public/                static files (includes .nojekyll)
next.config.mjs        static export config (basePath from NEXT_PUBLIC_BASE_PATH)
.github/workflows/     build + deploy to GitHub Pages
```

## Commands
- `npm run dev` — local dev server with hot reload.
- `npm run build` — static export to `out/`.
- `NEXT_PUBLIC_BASE_PATH=/tropecando-pelo-mundo npm run build` — build exactly as CI does, to test
  subpath-relative links locally.

Deploys happen automatically via GitHub Actions on push to `main`. `out/` and `.next/` are not
committed.
