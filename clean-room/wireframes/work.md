# Wireframe — Selected Work

- **Slug:** work
- **URL:** https://www.fellipebrito.com/work
- **Page type:** work (Mateo Hybrid layout)
- **Source:** Phase 5 spec (`05-recommendations.md`); R3 layout details (`03-track-record.md` § "Layout Proposal A — Mateo Hybrid")

## Layout

### [HEADER] — component: GlobalHeader (v2)

### [HERO] — component: HeroBlock (variant: page-default)
- H1: `Selected Work`
- 3-line bio:
  <!-- DRAFT - Fellipe to revise -->
  `Christian. Entrepreneur. Software architect.`
  `I build software for companies that need it to last — not trend.`
  `Founder of Bossa Nova Solutions. Embedded at Facebook, SESAC, Rumblefish. Shipped for Netflix, NBC, Spotify, PING, QWIRE, Whiskey Social.`

### [SECTION: Where I've been embedded]
- Heading: H2 — `Where I've been embedded`
- Three WorkRow entries (chronology TBD — Fellipe to confirm year-ranges):
  - **WorkRow 1** — Company: `Facebook` · Years: `TBD` · Role line: <!-- DRAFT - Fellipe to revise --> `Software engineer / TBD-team. TBD-1-line outcome.`
  - **WorkRow 2** — Company: `SESAC` · Years: `TBD` · Role line: <!-- DRAFT - Fellipe to revise --> `TBD-role. TBD-1-line outcome.`
  - **WorkRow 3** — Company: `Rumblefish` · Years: `TBD` · Role line: <!-- DRAFT - Fellipe to revise --> `TBD-role. TBD-1-line outcome.`
- Components used: WorkRow (×3)

### [SECTION: Shipped for]
- Heading: H2 — `Shipped for`
- Content type: 6-logo ClientGrid, 2 rows of 3 (per R3 Mateo Hybrid).
- Logo order (row-major):
  - Row 1: Netflix · NBC · Spotify
  - Row 2: QWIRE · PING · Whiskey Social
- Each logo is a link to a `ClientCaseNote` (per-client deep link; URL pattern TBD — likely `/work/<client-slug>` or anchor-on-page; Phase 7 decision).
- Components used: ClientGrid (×1, 6 cells), ClientCaseNote (×6 — content TBD per client)

### [SECTION: Testimonial pull-quote] — OPTIONAL
- TBD — Fellipe to source / approve a testimonial.
- If included: component is `BlockQuote` (PullQuote variant) with attribution line.
- Mark: <!-- TBD - Fellipe to provide testimonial copy + attribution; section can be omitted if none -->

### [FOOTER] — component: GlobalFooter (v2)
