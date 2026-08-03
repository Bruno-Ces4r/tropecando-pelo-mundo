# Technical Spec — Guia do Nômade

## Stack Decision

**Choice: Next.js (App Router, TypeScript) with static export, hosted on GitHub Pages — revised
from the earlier Eleventy plan.**

Decision history:
1. Original idea brief: plain HTML/CSS.
2. Revised to Eleventy once i18n became a requirement (avoid hand-duplicating pages per language).
3. Revised again to **Next.js** once the project's goals changed to include serving as a
   **portfolio piece** with room to grow (see PRD note). This is a deliberate trade: it's heavier
   than the content strictly needs today, accepted in exchange for market reach (React/Next is the
   most in-demand stack for the remote/international roles Bruno targets) and a growth path that
   doesn't require a rewrite.

Why Next.js specifically over other React options:
- **Static export now, scale later without switching stacks.** `output: 'export'` produces a
  fully static site (free on GitHub Pages, zero infra — meets the current constraint). If the
  project later needs a backend, automated checkout, or a logged-in area, Next supports SSR and
  API routes within the *same* framework — no migration.
- **Mature i18n.** With App Router + static export, i18n is done via a dynamic `[lang]` segment
  and `generateStaticParams`, with per-language dictionary files. Fully static, still PT/EN.
- Chosen over Gatsby (maintenance uncertainty) and plain Vite/CRA (no first-class static-routing/
  i18n story). Astro + React was the lighter alternative but carries less portfolio signal for
  React-focused roles, which is now an explicit goal.

Cost acknowledged: heavier build and a JS runtime shipped to the client vs. the zero-JS Eleventy
output. Accepted given the revised goals. **Revisit if** the portfolio/growth goal is dropped —
in that case the previous Eleventy setup (preserved in git history) is the simpler fit.

## Hosting
- GitHub Pages, free tier. Next.js static export writes the site to `out/`; that built output —
  not the source — is deployed. A GitHub Actions workflow (free for public repos) builds and
  publishes on every push, so Bruno never has to build locally.
- Project sites are served from `/<repo>/`, so `basePath`/`assetPrefix` are set to the repo name
  in `next.config`. Images use `unoptimized: true` (required for static export — no image server).
- The project-documentation `docs/` folder and the build output (`out/`) are separate, so there's
  no naming collision.
- No custom domain required for v1 (default `username.github.io/repo-name` is fine).

## Internationalization (i18n)
- PT-BR is the default language; EN is the second language for v1.
- Implemented with App Router: a dynamic `app/[lang]/` segment plus `generateStaticParams()`
  returning `pt` and `en`, so both language trees are pre-rendered at build time (fully static).
- Copy lives once per language in dictionary files (`dictionaries/pt.json`, `dictionaries/en.json`),
  loaded by a small `getDictionary(lang)` helper and passed into shared components — so layout,
  nav, and styling changes happen once, in the components.
- URL structure: language prefix (`/pt/...`, `/en/...`). The root path `/` redirects to the
  default language (client-side meta refresh, since static export has no server redirects).
- A small language-switch link appears on every page, linking to the equivalent page in the other
  language.
- PDF guides are not translated in v1 — the EN version of a city page can note the guide is
  Portuguese-only, or simply not show the purchase block.

## Content Structure

```
Home
 └── Country (e.g. Brasil)
      └── City (e.g. João Pessoa)
           ├── Photos
           ├── Recommendations / tips (free, on-site)
           └── Paid PDF guide (optional — link to unlock flow, only if guide exists)
```

- Filesystem mirrors this: one folder per country, one HTML file (or folder) per city.
- A country/city can exist on the site with just a name/placeholder before its guide or even its
  full content is ready — the structure ships ahead of the content.

## PDF Unlock Flow (v1 — manual, free)

1. City page shows a "Guia completo em PDF" section with price and a Pix (and/or PayPal) payment
   link/QR code.
2. Instructions: after paying, send proof of payment to a given email (or WhatsApp).
3. Bruno manually replies with the Google Drive link (set to "anyone with the link can view").
4. No account system, no automated gate — this trades a small amount of manual effort for zero
   infrastructure and zero platform fees, which makes sense at current (low) volume.
5. **Documented upgrade path**: once volume/frequency justifies it, swap step 1–3 for a
   Hotmart/Kiwify product page that automates delivery — this only requires changing the link on
   the city page, not restructuring the site.

## Mentorship CTAs
- Two static blocks (could live on the Home page or a simple "Sobre/Contato" area) — short text +
  `mailto:` link. No separate pages, no pricing shown.

## Non-Functional Notes
- Everything must run at $0/month: GitHub Pages hosting, Google Drive for PDF storage, Pix/PayPal
  for payment — no paid tools anywhere in the v1 flow.
- Portuguese content, English code/docs (per PRD).
- No analytics/tracking decided yet — out of scope for v1; can be added later (e.g. free-tier
  privacy-friendly analytics) without restructuring.
