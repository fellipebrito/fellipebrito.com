# Wireframe — Writing (canonical index) — v2

- **Slug:** blog--all   *(legacy slug; page is now THE writing index)*
- **URL:** https://www.fellipebrito.com/writing   *(v1: /blog/all — 301 redirect at deploy)*
- **Page type:** writing-index
- **Source dossier:** pages/blog--all.md

This file is the **canonical wireframe** for all five writing index pages. The 4 category pages (`blog--bible`, `blog--music`, `blog--tech`, `blog--golf`) are thin variants of this layout — see their per-slug files for the H1/subhead overrides and filtered card list.

Page title (browser/SEO): `Writing` (page H1 below).

## Layout

### [HEADER] — component: GlobalHeader (v2)
(nav: `Fellipe Brito` | `Writing` | `Work` | `About` | `Hire`)
- The v1 "Get the Template" Lemon Squeezy affiliate link is removed in v2.

### [HERO]
- H1: `Writing`   *(v2 — was: "Curious About Tech, Faith, and a Better Golf Game?")*
- Subhead: <!-- DRAFT - Fellipe to revise --> `Bible. Music. Tech. Golf. Tuesday Notes weekly.`
- CTA: none (newsletter signup repeats below)
- Media: TBD — Phase 7 design decision

### [SECTION: All posts]
- Heading level: implicit (no visible H2 in dossier — listing is the page's primary content)
- Content type: card grid (20 cards on /writing; filtered subsets on category pages)
- Cards render: title / category / image / link
  - Card link target (v2): `/writing/<slug>` — was `/blog/all/<slug>`.
  - DO NOT use the listing UI's displayed date — Discovery confirmed every card on the live site shows "July 25, 2023" as a template default placeholder. Phase 7 sources the true date from the article (already captured in sitemap.json).
- Card list (canonical /blog/all order):
  1. Golf — We never lose
  2. Tech — AI :: Where I'm drawing the line
  3. Free Thought — A Conversation with My Anxiety
  4. Golf — Breaking 90, and the Illusion of Arrival
  5. Golf — Lessons from My First Golf Tournament
  6. Bible — The Light the Darkness Cannot Understand
  7. Bible — "I Am": Recovering the Divine Voice
  8. Bible — A Message from the Courtyard: Friday Reflections
  9. Free Thought — The Challenge of Being "A Believer"
  10. Bible — Thanksgiving
  11. Free Thought — Happy 4th of July
  12. Bible — I think, therefore I believe
  13. Bible — Just keep swiming
  14. Short Stories — It is she!
  15. Bible — The Case for christian skepticism
  16. Free Thought — I am not from Wakanda
  17. Music — Never Enough
  18. Bible — Why should I read Mark?
  19. Bible — A Journey Through the Gospel of John
  20. Music — A Beautiful Day Despite Life's Shadows
- Components used: BlogCard (×N)

### [SECTION: Newsletter inline] — component: NewsletterInline
- Full-width form. Email field + submit: `Get my Tuesday Notes`.
- Wrapper copy: <!-- DRAFT - Fellipe to revise --> `Tuesday Notes — written Mondays, sent Tuesdays.`
- (v1's "Get Notifications For Each Fresh Post" copy is retired in v2.)

### [FOOTER] — component: GlobalFooter (v2)
- v1's separate "Navigation" footer block (Framer artifact) is absorbed into GlobalFooter v2.
