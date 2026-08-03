# Technical Spec — Guia do Nômade

## Stack Decision

**Choice: lightweight static site generator (Eleventy), hosted on GitHub Pages — revised from the
original plain-HTML plan.**

Tradeoff reconsidered: the original plan (plain HTML/CSS, no generator) worked for a single
language, but i18n changes the math. Without a generator, adding a second language means every
page exists twice (`joao-pessoa.html` + `joao-pessoa-en.html`), hand-kept in sync — every edit to
shared layout, nav, or copy has to happen in both files, and that only gets worse as cities and
languages are added. A generator lets each page's content live once (as data/content files) and
render per-language automatically from shared templates.

Chose **Eleventy** specifically because: it's free, has no framework lock-in (outputs plain HTML),
has straightforward built-in support for multi-language content structures, and keeps the "fast
to ship, low complexity" spirit of the project — it's a templating/build step, not a full
application framework. This does add one tool to learn and a build step (`npm run build` before
deploy), which is a real cost against the "keep it dead simple" goal — but it's a smaller cost
than hand-duplicating every page per language.

**Revisit this decision if** the build step becomes a bigger blocker than expected in practice —
in that case, falling back to plain HTML with a minimal include-based templating trick (just for
the nav/header) is still an option.

## Hosting
- GitHub Pages, free tier. Eleventy builds the site into an output folder (e.g. `_site`); that
  built output — not the source — is what gets deployed. A simple GitHub Actions workflow (free
  for public repos) can build and publish on every push, so Bruno never has to build locally.
- The project-documentation `docs/` folder and Eleventy's build output are already separate
  (`docs/` = source docs, `_site/` = build output), so the earlier naming collision concern is
  resolved by this stack choice.
- No custom domain required for v1 (default `username.github.io/repo-name` is fine); custom
  domain is a possible later addition, still free via GitHub Pages if Bruno already owns a domain.

## Internationalization (i18n)
- PT-BR is the default language; EN is the second language for v1.
- Content (per city/country/page) lives once, in language-specific content files (e.g.
  `content/pt/joao-pessoa.md` + `content/en/joao-pessoa.md`) that share the same template — so
  layout, nav, and styling changes only happen once, in the template.
- URL structure: language prefix (e.g. `/pt/brasil/joao-pessoa/`, `/en/brasil/joao-pessoa/`),
  which is Eleventy's standard approach and keeps things crawlable/shareable per language.
- A small language-switch link/toggle appears on every page, linking to the equivalent page in
  the other language.
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
