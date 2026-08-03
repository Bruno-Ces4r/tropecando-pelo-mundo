# PRD — Guia do Nômade

## Problem
Bruno produces travel research, photos, and local tips for every destination as part of his YouTube
channel ("Bruno Tropeçando pelo Mundo"), but this work currently has no life beyond the video itself.
There's no lightweight, low-effort way to package it into something the audience can browse and buy.

## Goals
- Reuse existing YouTube content (research, photos, tips) with minimal extra production effort.
- Give the audience a browsable, permanent home for destinations, organized by country/city.
- Sell a low-friction digital product (per-city PDF guide) as a small secondary revenue stream.
- Offer two mentorship paths (tech, travel) as a higher-value revenue stream, sold via direct
  contact/negotiation rather than a fixed checkout.
- Ship for free — no hosting costs, no recurring fees.

## Non-Goals (v1)
- No user accounts, login, or audience database.
- No automated payment→delivery pipeline (manual fulfillment is acceptable at current volume).
- No dedicated landing pages for mentorship — just CTA blocks linking to email.
- No CMS — content is added by directly editing files (low volume, single author).

Note (updated): this project **now also serves as a portfolio piece** and is intended to grow.
That's a deliberate change from the original idea brief, which framed it as a throwaway-simple
companion project. Simplicity and shipping speed still matter, but the stack choice now also
weighs market reach and room to grow (see TECH_SPEC). It does not replace the separate "Garimpo"
project as the primary engineering showcase — the two now both carry some portfolio weight.

## Target User
Bruno's own audience: people following the YouTube/Instagram/TikTok content, interested in
budget travel, digital nomad life, and specifically the destinations Bruno has visited or plans
to visit.

## Functional Requirements

### Site structure
- Home page: brief intro + list of countries.
- Country page: list of cities (visited or planned) within that country.
- City page: photos, personal recommendations/tips, and (once ready) a link to buy the paid PDF
  guide for that city.
- Site launches with the country/city **structure only**; individual city guides are added
  incrementally as content is ready. No single city is required to be live at launch.

### Internationalization (i18n)
- Site supports multiple languages, not just Portuguese. Assumption (flag if wrong): PT-BR as the
  default/primary language, with EN as the second language for v1 — structured so more languages
  (e.g. ES) can be added later without a rework.
- PDF guides themselves stay Portuguese-only for v1 (per the "content language" note below) unless
  Bruno decides otherwise later — translating full guide content is a bigger lift than translating
  site copy.
- Language switch should be simple (e.g. a toggle/link per page), no user accounts or stored
  preference needed.

### PDF guide product
- Each city *may* have a paid PDF guide, starting at R$15 (raised from the original R$5–10 range
  in the idea brief — see Monetization Model).
- Guide content: recommended spots with a personal angle, money-saving tips (transport, food,
  lodging), personally-tested accommodation suggestions, and a suggested day-by-day itinerary —
  aligned with the "Nômade Raiz" style already used on the channel.
- PDF is hosted on Google Drive; the site links to a payment step that unlocks access.

### Payment/unlock flow (v1 — simplest free option)
- No checkout platform (Hotmart/Kiwify) for v1 — their percentage fees eat too much of a R$5–10
  price at low volume, and they add setup overhead for uncertain payoff.
- Instead: a Pix (or PayPal for international buyers) payment link/QR on the city page, with
  instructions to send proof of payment to Bruno's email/WhatsApp; Bruno manually replies with the
  Drive link. Fully free, zero infrastructure, acceptable manual effort at current audience size.
- This is explicitly a stopgap: revisit Hotmart/Kiwify once volume makes automation worth the fee.

### Mentorship offers
- Two simple CTA blocks (not full pages) — one for tech mentorship, one for travel mentorship —
  each just stating what it is and a "email me to talk" link. Pricing is negotiated 1:1 by email,
  not listed on the site.

### Content language
- On-site copy: Portuguese (default) + English (see Internationalization above).
- PDF guide content: Portuguese only for v1.
- Code, comments, and project docs: English.

## Monetization Model
1. **PDF guides** — starting price R$15 (~US$3), Pix/PayPal manual-fulfillment flow (v1). Still a
   low, low-friction price point, just raised from the original R$5–10 range to better reflect the
   value of the content.
2. **Tech mentorship** — price negotiated by email, higher ticket.
3. **Travel mentorship** — price negotiated by email, higher ticket.

Revisit pricing and automation (subscription/bundle per country, automated delivery via
Hotmart/Kiwify) once there's real traffic/conversion data.

## Success Signals (informal, v1)
- Site is live and structurally reflects real destinations as they're visited.
- At least one PDF guide sells without requiring active promotion effort.
- At least one mentorship inquiry arrives through a CTA link.

## Open Items for Later Phases
- Whether to add a lightweight page per mentorship offer once there's demand signal.
- Whether/when to move to an automated checkout platform.
- Custom domain vs. default GitHub Pages URL.
- Whether to add more languages beyond PT/EN (e.g. ES), and whether PDF guides should ever be
  translated.
