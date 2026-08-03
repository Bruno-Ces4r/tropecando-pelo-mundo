# TASKS — Guia do Nômade

Small, sequential slices. Each task should be shippable/testable on its own. Don't start a task
until the previous one is done and reviewed.

## Phase 0 — Project Base
- [ ] **0.1 Scaffold repo structure**
  Acceptance: repo has `docs/` (project docs), an Eleventy project (source content + templates),
  `.gitignore`, `CLAUDE.md`, initial commit made.
- [ ] **0.2 Eleventy base config + i18n skeleton**
  Acceptance: `npm run build` produces a working `_site` with one page in PT and its EN
  equivalent, using the `/pt/...` and `/en/...` URL structure, sharing one template.
- [ ] **0.3 GitHub Actions build+deploy workflow**
  Acceptance: pushing to `main` automatically builds and publishes to GitHub Pages, no manual
  build step required.

## Phase 1 — Content Structure (ship the skeleton first)
- [ ] **1.1 Home page shell (PT + EN)**
  Acceptance: home page renders in both `/pt/` and `/en/` with title, short intro, and a list of
  countries (Brasil, Tailândia, Vietnã) even if some have no cities yet. Language switch link
  works both ways.
- [ ] **1.2 Country page template (PT + EN)**
  Acceptance: one country page (Brasil) lists its cities (João Pessoa, Pipa, Chapada dos
  Veadeiros, Fortaleza) as links, in both languages, even if city pages are placeholders.
- [ ] **1.3 City page template (PT + EN, placeholder content OK)**
  Acceptance: a city page renders with sections for photos, tips, and PDF guide — each section
  can say "em breve"/"coming soon" if content isn't ready yet. Confirms the template works in
  both languages before populating real content.
- [ ] **1.4 Repeat country/city scaffolding for remaining destinations**
  Acceptance: Tailândia and Vietnã country pages exist (even empty/"a definir"), matching the
  structure from the idea brief, in both languages.

## Phase 2 — Design
- [ ] **2.1 Shared visual identity**
  Acceptance: consistent header/nav, color palette, and typography applied across home/country/
  city templates, aligned with the "Nômade Raiz" channel branding (Bruno to supply reference
  colors/logo if available).
- [ ] **2.2 Responsive check**
  Acceptance: pages are readable and usable on mobile widths (most audience traffic will be
  mobile, coming from Instagram/TikTok links).
- [ ] **2.3 Photo layout**
  Acceptance: city pages display a simple photo gallery/grid, reasonably fast-loading (compressed
  images).

## Phase 3 — PDF Unlock Flow + Mentorship CTAs
- [ ] **3.1 Payment link block on city page**
  Acceptance: city page (PT version) has a "Guia completo em PDF" section showing price starting
  at R$15, Pix/PayPal link or QR, and clear instructions for how to receive the Drive link after
  payment. Only shown for cities that actually have a guide ready. EN version either omits the
  purchase block or notes the guide is Portuguese-only (per PRD).
- [ ] **3.2 Mentorship CTA blocks**
  Acceptance: two short CTA blocks (tech mentorship, travel mentorship) with `mailto:` links,
  placed on the home page (or a simple contact area) — no dedicated pages.
- [ ] **3.3 First real city guide live**
  Acceptance: at least one city has real content (photos, tips, itinerary) and, if ready, an
  actual purchasable PDF — proves the full flow end-to-end.

## Phase 4 — Publish
- [ ] **4.1 Enable GitHub Pages**
  Acceptance: site is live at the GitHub Pages URL, all internal links work from the deployed
  version (not just locally).
- [ ] **4.2 Final content pass**
  Acceptance: no placeholder/"em breve" text left on any page that's meant to be live; broken
  links checked.
- [ ] **4.3 Announce**
  Acceptance: link shared via YouTube/Instagram/TikTok channels (outside repo scope, just a
  checklist reminder).

## Later / Not Scheduled Yet
- Revisit checkout automation (Hotmart/Kiwify) once volume justifies the fee.
- Consider dedicated mentorship landing pages if inquiries pick up.
- Custom domain.
- Analytics.
- Additional languages beyond PT/EN (e.g. ES).
- Translating PDF guide content.
