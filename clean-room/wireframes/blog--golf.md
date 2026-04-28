# Wireframe — Writing Index: Golf (variant) — v2

- **Slug:** blog--golf
- **URL:** https://www.fellipebrito.com/writing/golf   *(v1: /blog/golf — 301 redirect at deploy)*
- **Page type:** writing-index (filtered)
- **Source dossier:** pages/blog--golf.md

Follows `blog--all.md` (canonical writing-index wireframe). Differences:

- **HERO H1:** "Golf is where I learn patience, presence, and humility."
- **HERO subhead (H3):** "Beyond swing mechanics into the mental, emotional, and spiritual side of chasing a little white ball around."
- **HEADER:** standard GlobalHeader v2.
- **All posts section:** filtered to `category == "Golf"` (3 cards per canonical writing data):
  - We never lose
  - Breaking 90, and the Illusion of Arrival
  - Lessons from My First Golf Tournament
- **TBD: needs browser inspection** — Discovery did not return individual cards on this category page across multiple passes (only the hero). Verify the grid actually renders before migration.
- All other sections (NewsletterInline, GlobalFooter v2) identical to canonical.
