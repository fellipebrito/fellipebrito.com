# Wireframe — Writing Index: Tech (variant) — v2

- **Slug:** blog--tech
- **URL:** https://www.fellipebrito.com/writing/tech   *(v1: /blog/tech — 301 redirect at deploy)*
- **Page type:** writing-index (filtered)
- **Source dossier:** pages/blog--tech.md

Follows `blog--all.md` (canonical writing-index wireframe). Differences:

- **HERO H1:** "I build things for people—apps, systems, tools, ideas."
- **HERO subhead (H2 in dossier — sub-copy):** "Sharing what I'm learning as a developer and entrepreneur trying to make tech a little more human."
- **HEADER:** standard GlobalHeader v2.
- **All posts section:** filtered to `category == "Tech"` — 1 card per canonical writing data:
  - AI :: Where I'm drawing the line
- **TBD: needs browser inspection** — Discovery flagged that WebFetch returned Golf-tagged cards on this page across two passes, suggesting a CMS / Framer collection-filter wiring bug or empty state. Phase 7 should validate the actual rendered grid in browser before migration.
- All other sections (NewsletterInline, GlobalFooter v2) identical to canonical.
