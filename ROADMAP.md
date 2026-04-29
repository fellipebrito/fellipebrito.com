# fellipebrito.com — ROADMAP

Strategic roadmap for evolving the site from "credentials & conversion" into "living representation of who Fellipe is." Initial coaching pass: 2026-04-28.

## North star

The site should answer two questions equally well:

1. *Should I hire this guy?* — already strong (work history, logos, testimonials, clear CTA).
2. *Who is this guy and why do I want to follow him?* — currently thin.

Three vectors we're growing:

- **Body of work beyond clients** — books, videos, open code, talks.
- **Cadence signal** — `/now`, recent-commits feed, featured-video swap. Proof the site is alive.
- **Voice in places other than blog body** — punchier About, opinionated `/uses`, `/reading`, etc.

---

## Phase 1 — Quick personality wins (target: 1-2 days) ✓ shipped 2026-04-28

- [x] **A1. RSS feed** via `@astrojs/rss`. 112 articles syndicate at `/rss.xml`. Discoverable via `<link rel="alternate">` in BaseLayout.
- [x] **A2. `/now` page** — manually edited monthly. Follows nownownow.com convention. Linked from header nav. First entry: May 2026.
- [x] **A3. About page hero** — `Hi, I'm Fellipe.` (was bare "About"). Lead paragraph in AboutBlock adjusted to avoid duplicate "I'm Fellipe."
- [x] **A4. Promoted the AI/dependence line** as a manifesto band on `/hire`, between hero and testimonial. Footer signature kept.

## Phase 2 — New surfaces (target: 1-2 weeks)

- [ ] **B1. `/books`** — index + per-book landing pages.
  - Default model: free download, email-gated via Buttondown (grows newsletter, fits non-mercenary tone).
  - Optional "Support the work" tip-jar link.
  - Files: `public/books/{slug}.pdf` for now; move to Cloudflare R2 / Backblaze B2 if cumulative >20MB.
  - **Blocked on:** how many books, names, free vs paid vs pay-what-you-want.
- [ ] **B2. `/watch`** — curated YouTube grid.
  - Categories mirror blog: Bible / Music / Tech / Golf (+ optional Talks).
  - Embed: `lite-youtube-embed` (~2KB, defers iframe — YouTube native is ~1MB JS per video).
  - Curate 8-12 videos, not the whole channel.
  - Featured video on home — fills currently-empty hero media slot.
  - **Blocked on:** YouTube channel URL for inventory.
- [ ] **B3. `/lab`** — code showcase.
  - Top: 3-5 hand-picked featured projects (title, one-line pitch, GitHub link, optional demo, language pills).
  - Below: last 10 commits across public personal repos, fetched at build time via GH REST API.
  - **Blocked on:** which featured repos (propose 5 from public list, or specific picks). Anything to exclude.
- [x] **B4. `/library/<topic>`** — themed collections of existing essays. Shape: a *post you read* (anchor question + woven prose with hyperlinked quotes pulling into source essays), not a directory grid. First instance: `/library/resurrection` — 11 essays, 15 years, shipped 2026-04-29. Standalone URL for now (no nav link); add more `/library/<topic>` pages as themes accumulate.

## Phase 3 — Personality bets (whenever)

- [ ] **D1. `/uses`** — editor, terminal, gear, daily tools. Engineers click these. Low effort, big personality signal.
- [ ] **D2. `/reading`** — currently reading + favorites (Christian thinkers, business, fiction). Reveals dimensions. Fellipe explicitly asked to "keep an archive of this somewhere" — once /reading is live, /now lifts to a one-line "currently reading" pointer instead of repeating titles. Seed entries from May 2026 /now: *Garden City* (John Mark Comer), *God's Homecoming* (N. T. Wright), *The Tiger Slam* (Kevin Cook), *Hidden Potential* (Adam Grant).
- [ ] **D3. Route Free Thought + Short Stories** — schema has these categories but no pages route to them. Either route or remove from schema.
- [ ] **D4. Portrait** — at some point the faceless hero costs trust. Once you have a photo you like.

---

## Deferred — Living layers (was Phase C, demoted)

Lower priority — quality-of-life automation. Revisit after Phase 3 lands.

- [ ] Daily rebuild via GH Action to keep `/lab` recent-commits feed fresh without manual pushes.
- [ ] Newsletter archive surface — render Buttondown's archive as a sub-route of `/blog/all` (Tuesday Notes are distinct from longform essays — separate them).
- [ ] Featured video swap on home (manual quarterly).

---

## Open questions blocking starts

1. **Books**: how many, what are they called, free / paid / pay-what-you-want? Need a short blurb each.
2. **YouTube channel URL** — to inventory videos and propose categorized curation for `/watch`.
3. **Featured GitHub repos** — propose 5 from public list, or you have specific picks? Anything to explicitly exclude?
4. **`/now` discipline** — willing to commit to a monthly update? Stale `/now` is worse than no `/now`. If not realistic, skip A2.

---

## How this doc is used

- **Every session that opens this project:** NOVA reads this file and proposes what to attack next based on which Phase has the most unchecked items.
- **Items get checked as they ship.** Closed phases stay in the doc as record.
- **New ideas** land at the bottom of the relevant phase, or in **Deferred** for later triage.
- **Rewrite the roadmap whenever the strategic picture changes** — this is a living doc, not a contract.
- **Last update line at the bottom is required** — keep it accurate so staleness is visible.

---

**Last roadmap update:** 2026-04-29 (Phase 2 — B4 shipped: `/library/resurrection`)
