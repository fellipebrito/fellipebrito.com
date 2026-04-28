# Wireframe — Fellipe Brito (Home) — v2

- **Slug:** index
- **URL:** https://www.fellipebrito.com/
- **Page type:** home
- **Source:** Phase 5 spec (`clean-room/research/05-recommendations.md`), IA v2

This file replaces the v1 home wireframe. v1 (Framer "Newsbook" template structure with Recent Post + Featured Blogs grids) is discarded. New structure below reflects the Phase 5 IA + hero + CTA decisions Fellipe locked.

## Layout

### [HEADER] — component: GlobalHeader
(nav v2: `Fellipe Brito` (wordmark → /) | `Writing` | `Work` | `About` | `Hire`)

### [HERO] — component: HeroBlock (variant: home)
- H1: `Christian. Entrepreneur. Builder of tools that last.`
- Supporting line (single line, sub-H1):
  <!-- DRAFT - Fellipe to revise -->
  `Software architect. Embedded at Facebook, SESAC, Rumblefish. Shipped for Netflix, Spotify, NBC, PING, QWIRE.`
- Primary CTA — component: NewsletterForm (variant: hero)
  - Email field (placeholder: `you@domain.com` — TBD)
  - Submit button: `Get my Tuesday Notes`
  - Microcopy under button (optional): <!-- DRAFT - Fellipe to revise --> `Written Mondays. Sent Tuesdays. Faith, tech, the work that lasts.`
- Secondary CTA — text link: `Work with me →` → `/hire`
- Media: TBD (portrait or geometric mark — Phase 7 design decision)

### [SECTION: Recent writing] — component: WritingTeaser
- Heading: H2 — `Recent writing`
- Content type: 3 BlogCard cards — most-recent published articles, derived from manifest sort by `date` desc, excluding articles with null dates (or surface them last).
- Footer link: `View all writing →` → `/writing`
- Components used: BlogCard (×3)
- Note: ordering rule is "latest 3 published" — Phase 7 implements as a derived query, not a static array. Card data comes from the same source as `/writing`.

### [SECTION: Selected Work] — component: WorkTeaser
- Heading: H2 — `Selected Work`
- Tier-1 logo strip: Facebook · Netflix · Spotify · NBC (single row, monochrome)
- Pitch line (1 line):
  <!-- DRAFT - Fellipe to revise -->
  `Embedded at Facebook and SESAC. Shipped for Netflix, NBC, Spotify, PING, QWIRE.`
- Footer link: `See selected work →` → `/work`

### [SECTION: Who I am] — component: AboutTeaser
- Heading: H2 — `Who I am`
- 2-line bio:
  <!-- DRAFT - Fellipe to revise -->
  `Christian first. Entrepreneur second. Founder of Bossa Nova Solutions, building tools in golf, faith, and education.`
  `I write Tuesday Notes on faith, tech, and the work that lasts.`
- Footer link: `More about me →` → `/about`

### [SECTION: Newsletter inline] — component: NewsletterInline
- Full-width form repeat (R4 placement #2 — mid-page).
- Heading (H2, optional): <!-- DRAFT - Fellipe to revise --> `Get the Tuesday Notes`
- One-line wrapper copy: <!-- DRAFT - Fellipe to revise --> `One email a week. Mondays writing. Tuesdays your inbox.`
- Email field + submit button: `Get my Tuesday Notes`

### [FOOTER] — component: GlobalFooter (v2)
(nav repeat + NewsletterForm + copyright — see `components.md`)
