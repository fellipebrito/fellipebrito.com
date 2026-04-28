# Wireframe — About

- **Slug:** about
- **URL:** https://www.fellipebrito.com/about
- **Page type:** about
- **Source:** Phase 5 spec (`05-recommendations.md`) — DHH-style multi-noun bio, faith woven in but not dominating; full identity stack lives here, hero stays compact.

## Layout

### [HEADER] — component: GlobalHeader (v2)

### [HERO] — component: HeroBlock (variant: page-default)
- H1: `About`

### [SECTION: Identity stack] — component: AboutBlock
Multi-section identity block. Each section is a single short paragraph (or 2-3 sentences). Voice: Christian-first, no Christianese, no Latin, no theology nouns, no verses. Fragments OK.

- **Sub-section 1 — Who I am** (no heading or H3 `Who I am` — Phase 7 design call):
  <!-- DRAFT - Fellipe to revise -->
  `I'm Fellipe. Christian first. Entrepreneur. Software architect.`
  `I run Bossa Nova Solutions — a small studio building tools in golf, faith, and education. I write here weekly.`

- **Sub-section 2 — What I do now** (H3: `What I do now`):
  <!-- DRAFT - Fellipe to revise -->
  `Most days: building Bossa Nova Solutions. Software, advisory, and a couple of products of my own.`
  `Specific work areas: golf (training tools, course apps), faith (study tools and church-side software), education (learning tools that respect the learner).`

- **Sub-section 3 — Where I've been** (H3: `Where I've been`):
  <!-- DRAFT - Fellipe to revise -->
  `Embedded at Facebook, SESAC, Rumblefish. Shipped for Netflix, NBC, Spotify, PING, QWIRE, Whiskey Social.`
  `Long version → see /work.`
  - Inline link: `/work` (text: "Long version → see /work" or `See selected work →`)

- **Sub-section 4 — What I write about** (H3: `What I write about`):
  <!-- DRAFT - Fellipe to revise -->
  `Four threads: Bible, Music, Tech, Golf.`
  `Tuesday Notes goes out weekly — written Mondays, sent Tuesdays.`
  - Inline links: `/writing/bible`, `/writing/music`, `/writing/tech`, `/writing/golf`

- **Sub-section 5 — How to find me** (H3: `How to find me`):
  - Hire link: `Work with me →` → `/hire`
  - Newsletter link: `Get my Tuesday Notes →` → `/#newsletter` (or anchor to NewsletterInline on home)
  - Social: <!-- TBD - Fellipe to fill: X / LinkedIn / GitHub / etc. -->

### [SECTION: Newsletter inline] — component: NewsletterInline
- Full-width form. Email field + submit button: `Get my Tuesday Notes`.
- One-line wrapper copy: <!-- DRAFT - Fellipe to revise --> `Tuesday Notes — written Mondays, sent Tuesdays.`

### [FOOTER] — component: GlobalFooter (v2)
