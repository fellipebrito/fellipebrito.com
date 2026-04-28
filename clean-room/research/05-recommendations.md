# Phase 5 — Recommendations: NOVA Synthesis
- Date: 2026-04-27
- Inputs: 01-pattern-scan.md / 02-identity-layering.md / 03-track-record.md / 04-funnel-ux.md
- Author: NOVA (main thread)

This document combines the four research outputs into actionable choices for Fellipe to make before Phase 6 (wireframe expansion) and Phase 7 (componentization + scaffold).

---

## TL;DR

- **IA**: 5 pages. `Home / Writing / Work / About / Hire`.
- **Hero**: compound-conjunction structure (Dyer/Moore evidence). Three variants below to pick from.
- **CTA**: asymmetric — newsletter dominant in hero, "Work with me →" secondary text link. (Inverted variant available if Fellipe wants client-CTA primary.)
- **Selected Work**: Mateo Hybrid layout (employer narrative + client logo grid).
- **Newsletter**: hero + footer + inline-mid-article. No popups.
- **Hire**: dedicated `/work` page with embedded form (NOT a link-out to forms.gle).
- **Stack** (Phase 7 decision): Astro recommended. Vite+React+Tailwind viable but worse fit for 26-page content site.

5 decisions for Fellipe at the bottom.

---

## Cross-research synthesis

### Identity (R1 + R2)
- 3-noun tagline is the magic number (R1). Fellipe has 4 (Christian / Entrepreneur / Tech Guru / Solutions Guy). Resolution: merge "Tech Guru" + "Solutions Guy" into one — "Builder" / "Operator" / "Architect" — and keep Christian + Entrepreneur as the first two anchors.
- Compound-conjunction hero is the strongest live evidence (Dyer's `Coder and Professor, Technology and Faith.`; Moore's `Engaging the Culture without Losing the Gospel.`).
- Save the full identity stack for the About page (DHH-style multi-noun bio works one click deep).
- **Hard avoid in hero**: Christianese, Latin theology, bare verses. Even Tim Challies (100% Christian audience) doesn't do this. Save for blog tags.

### Track-record (R3)
- One-page Selected Work, Mateo Hybrid layout: bio → "Where I've been embedded" (employer narrative) → "Shipped for" (client logo grid). 2-tier logo split converts mixed credentials into a narrative arc.
- Header verbiage: **"Selected Work"** (not "Portfolio," "My Work," "Clients").
- Verbs: `Where I've been embedded` / `Shipped for`. Active, operator-flavored, distinguishes salary vs. project unambiguously.

### Funnel (R4)
- **Two equal-weight CTAs in the hero is the #1 anti-pattern.** Pick one primary, demote the other to text link.
- Newsletter as hero primary (filled button), `Work with me →` as secondary text link — data-driven default.
- Both newsletter + work-with-me get equal weight in **top nav**.
- Embed contact form on `/work` page (1-2 paragraphs of context + embedded form). Don't link out to `forms.gle`.
- Skip popups, sticky bars, exit-intent.
- Submit-button copy: `Tell me about it` or `Send your project`. Never `Submit`.

### Bonus signal (R1)
- Tim Challies has a 2026 anti-AI sub-tagline ("handwritten or hand-selected for you without any use of AI"). Nobody else in the surveyed set is doing this. Optional differentiator for Fellipe given Christian-first + craft-focused identity.

---

## IA — recommended (and 2 alternatives)

### Recommended: 5-page IA
```
/                  Home
/writing           Blog index (renames /blog/all → /writing for cleaner URL)
/writing/<slug>    Articles (×20)
/writing/bible     Category filter
/writing/music     Category filter
/writing/tech      Category filter
/writing/golf      Category filter
/work              Selected Work (Mateo Hybrid)
/about             About (deeper bio, full identity stack)
/hire              Work with me (page + embedded form)
```

Top nav (left → right): `Fellipe Brito` (logo/wordmark home link) | `Writing` | `Work` | `About` | `Hire`
Plus: persistent newsletter signup in footer + inline.

Note: renaming `/blog` → `/writing` is a stronger personal-brand verb. Both R1 and R2 evidence sites use `Writing` (Naval, Andy Crouch, Russell Moore). Optional — keep `/blog` if you prefer URL stability with the existing site.

### Alternative A: 4-page IA (compress About into Home)
Drop `/about`. Home includes a "Who I am" section. Slimmer; loses dedicated About SEO/share surface. **Skip if you want About on social previews.**

### Alternative B: 6-page IA (separate Newsletter page)
Add `/newsletter` with archives + signup. Most complete; risks nav bloat. **Only if you publish a newsletter that's distinct from the blog.**

---

## Hero — three variants

For each: full copy + CTA stack. Pick A, B, C, or remix.

### Hero A — Compound Conjunction (R2 pure, Dyer-style)
```
Christian. Entrepreneur. Builder of tools that last.

Software architect for Facebook, Netflix, Spotify, NBC, SESAC,
PING, QWIRE — and the local church.

[ email____________________ ]  [ Subscribe ]      Work with me →
```
- Strongest evidence-backed pattern (Dyer, Moore).
- Hits Christian-first in the first word.
- "Builder of tools that last" merges Tech + Solutions into one phrase.
- Logo dump in supporting line is bold but earned — your list is real.

### Hero B — Two-sentence intro (Lee Robinson + R2 fusion)
```
Hi, I'm Fellipe.
Christian. Entrepreneur. I've built software at Facebook, Rumblefish,
and SESAC, and shipped for Netflix, NBC, Spotify, PING, QWIRE, and
Whiskey Social.

Now I'm growing Bossa Nova Solutions — the studio that builds tools
that outlast trends.

[ email____________________ ]  [ Subscribe ]      Work with me →
```
- Warmer / more conversational. R1's two-sentence pattern.
- Bossa Nova gets named — useful if it's the revenue engine.
- More text above the fold. Less iconic, more legible.

### Hero C — Mission positioning (Russell Moore inspired)
```
Engineering systems that serve people — and pointing to the One
who made them.

Christian entrepreneur, builder. Bossa Nova Solutions. Writing
weekly on faith, tech, and the work that lasts.

[ email____________________ ]  [ Subscribe ]      Work with me →
```
- Most poetic. Christian-first via implication ("the One who made them").
- Risk: non-Christian visitor may miss the layer; Christian visitor instantly recognizes it.
- Closest to Moore's exact pattern. Strongest "voice" hero.

---

## CTA hierarchy — pick one

### Default — Newsletter dominant (R4 data-driven)
- Hero: filled `Subscribe` button + `Work with me →` text link
- Reasoning: contact-form intent is rare and high-effort; visitors who want to hire you will hunt for the link. Newsletter intent is fleeting and needs capture at peak interest.
- Compounds reading audience over time.

### Inverted — Client-CTA dominant (matches your stated audience priority)
- Hero: filled `Tell me about your project` + `Subscribe` text link
- Reasoning: Bossa Nova client work is your stated revenue priority; lead with it.
- Tradeoff: harder to grow a reading audience. Newsletter conversion drops.

**NOVA's lean:** Default (newsletter dominant). Reasoning: clients who'd hire you are PAYING attention — they'll find `Hire` in the nav. Newsletter is the low-friction capture that builds the audience that eventually contains your future clients. The data backs this.

But — your call. You said audience primary = clients. If you trust your gut over the funnel data, go inverted.

---

## Selected Work — pick one

### A — Mateo Hybrid (R3 recommended)
- 3-line bio
- "Where I've been embedded" — Facebook / SESAC / Rumblefish, each with year-range + 1-line role/outcome
- "Shipped for" — 6-logo labeled grid (Netflix, NBC, Spotify, QWIRE, PING, Whiskey Social), each links to a 2-paragraph case note
- Optional testimonial pull-quote

### B — Selected Work List (R3 fallback)
- 3-line bio
- Single reverse-chrono list. Employer rows start with company name. Project rows start with "Shipped for X, Y, Z".
- No logos. Lowest production cost.

**NOVA's lean:** A (Mateo Hybrid). Your list contains 4 logos that visitors instantly recognize (Facebook, Netflix, Spotify, NBC). Throwing those credentials away is a real cost. The grid takes 1 hour of design work; the credibility lift lasts forever.

---

## Newsletter button copy — pick one

| Option | When to pick |
|---|---|
| `Subscribe` | Safe, zero risk, universal. |
| `Get my Monday note` (or whatever cadence you commit to) | Best conversion evidence. Specifies cadence + format. Requires committing to a cadence. |
| `Read with me` | Bespoke, fits Christian-first tone. Pairs with "read me + hire me" framing. |

**NOVA's lean:** `Get my Monday note` — IF you're willing to commit to a weekly cadence. Otherwise `Subscribe`.

---

## Sub-decision: Google Form vs. Tally / Typeform

You specified Google Form. R4 recommends Tally or Typeform for cleaner embed; Google Form iframe-embed is workable but rough.

- **Stay with Google Form**: keep the tooling you know. Iframe-embed it on `/hire`, wrap in a styled container. Adds visual roughness.
- **Switch to Tally** (free tier): cleaner embed, brandable, exports submissions to email/Slack/Notion/Google Sheets. Equivalent zero-cost effort.
- **Switch to Typeform**: prettiest UX, free tier limited (10 responses/month), starts at $25/mo for unlimited.

**NOVA's lean:** Tally. Free, branded, embeds clean. Google Sheets export keeps your existing data flow. Five minutes to switch.

You can defer this — answer it during Phase 6/7.

---

## Anti-AI angle (optional)

Tim Challies's site footer reads: *"Every piece of content...has been handwritten or hand-selected for you without any use of AI. Enjoy this truly human experience!"*

Given your Christian-first + craft-focused positioning, this is a real differentiator in 2026. Two placement options:
- Footer micro-line (Challies-style)
- About page section ("How I write")

**Caveat:** if you DO use AI in your writing process (research, drafting, editing), don't claim you don't. The position only works if it's true.

You can defer this — answer it during Phase 6.

---

## Components for Phase 7

New components (real, reusable, not duplicated HTML):
- `HeroBlock` — variant slots: form, secondary CTA, supporting copy
- `NewsletterForm` — appears in hero, footer, inline-mid-article (3 placements)
- `NewsletterInline` — full-width form for end-of-article
- `WorkRow` — employer with year-range + role line
- `ClientGrid` — 6 logo grid with click-through case notes
- `ClientCaseNote` — 2-paragraph case note (for grid click-through)
- `AboutBlock` — bio + identity stack
- `ContactBlock` — context paragraphs + embedded form

Existing components from Phase 2 inventory (refactor, don't rebuild):
- `GlobalHeader` (now: 4 nav links — Writing / Work / About / Hire)
- `GlobalFooter` (now: nav + newsletter form + copyright)
- `BlogCard` / `BlogList`
- `RecentPostsWidget` (decide: keep static-3 from current site, or replace with `ArticleNavigation` next/prev — Fellipe explicitly mentioned next/prev in his ask)
- `ArticleHero` / `HomeHero` / `CategoryHero`
- `BlockQuote` family (BlockQuote, ScripturePullQuote, PullQuote)
- Singletons (GreekVerseHeader, ArticleSources)
- `MediaEmbed` / `InlineImage`

New decision for Phase 7: **next/prev article navigation** (you asked for this) — replaces the static `RecentPostsWidget` or sits alongside it.

---

## 5 decisions Fellipe needs to make

1. **IA**: Recommended 5-page (`Home / Writing / Work / About / Hire`)? Or one of the alternatives? Plus: rename `/blog` → `/writing`, yes/no?
2. **Hero**: A (Compound Conjunction), B (Two-sentence), C (Mission positioning), or remix?
3. **CTA hierarchy**: Default (newsletter dominant) or inverted (client dominant)?
4. **Selected Work layout**: A (Mateo Hybrid) or B (Selected Work List)?
5. **Newsletter button copy**: `Subscribe` / `Get my Monday note` / `Read with me` / other?

Plus 2 deferrable bonuses:
- Google Form vs Tally vs Typeform (Phase 6/7 OK)
- Anti-AI angle (Phase 6 OK)

---

## What's next

Once you answer the 5 (or pick "NOVA's lean" on all of them), I launch:
- **Phase 6**: Wireframe agent — produces wireframes for new pages (Home, Work, About, Hire) + re-wireframes Header/Footer for new IA. Updates `clean-room/wireframes/`.
- **Phase 7**: Componentization + scaffold migration — the real work. Stack decision happens here.
