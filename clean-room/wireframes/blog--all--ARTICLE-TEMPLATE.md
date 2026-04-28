# Wireframe — Article (canonical template) — v2

- **Slug:** ARTICLE-TEMPLATE
- **URL pattern:** https://www.fellipebrito.com/writing/<slug>   *(v1: /blog/all/<slug> — 301 redirect at deploy)*
- **Page type:** article
- **Source dossiers:** pages/blog--all--*.md

This file is the **canonical wireframe** for all 20 article pages. Per-article files are thin and reference this template, listing only:
- H1 (article title, verbatim)
- published date
- category
- body shape (prose | sections-with-H2 | sections-with-H3 | letter-format | other)
- per-page deviations (intro paragraph, pull quotes, embeds, sources block, etc.)

**Article ordering rule (v2):** prev/next navigation is determined by **publication date (chronological)**. Earliest article has no "Previous"; latest article has no "Next". Articles with `date: null` in the manifest are placed at the end (or excluded from prev/next chain) — Phase 7 decision; mark TBD.

## Layout

### [HEADER] — component: GlobalHeader (v2)
(nav: `Fellipe Brito` | `Writing` | `Work` | `About` | `Hire`)

### [HERO / ARTICLE HEADER] — component: ArticleHero
- Category badge (H2 in dossier; renders as small kicker label above title): e.g. "Golf", "Bible", "Tech", "Free Thought", "Music", "Short Stories"
- H1: article title (verbatim)
- Author byline: "Fellipe Brito" (sitewide constant; not surfaced on every dossier but implied)
- Published date: from sitemap.json `date` field — DO NOT use the listing UI's "July 25, 2023" template default
- Hero image: TBD — Framer template typically renders one. **Needs browser inspection** for alt text and src on every article.

### [SECTION: Article body]
- Heading level: variable
  - **Prose-only** (no internal H2/H3): we-never-lose, ai-where-i-m-drawing-the-line, breaking-90-and-the-illusion-of-arrival, a-message-from-the-courtyard-friday-reflections, the-challenge-of-being-a-believer, thanksgiving, happy-4th-of-july, just-keep-swiming, it-is-she, i-am-not-from-wakanda, never-enough, why-should-i-read-mark, a-beautiful-day
  - **H2-sectioned** (article body broken into named subsections with H2): the-light-the-darkness-cannot-understand, i-think-therefore-i-believe (mixed H2 + H3)
  - **H3-sectioned** (numbered or named subsections at H3): lessons-from-my-first-golf-tournament, i-am-recovering-the-divine-voice, the-case-for-christian-skepticism, a-journey-through-the-gospel-of-john
  - **Letter format** (epistolary, two H3 stanzas — Letter / Response): a-conversation-with-my-anxiety
- Content type: prose, with optional inline elements (block quotes, pull quotes, lists, scripture citations, italics for emphasis, bold for emphasis)
- Inline elements seen across the corpus:
  - Block quotes (scripture passages, song lyrics, philosopher quotes)
  - Inline images (referenced in body — e.g. thanksgiving's "leafull tree")
  - Inline external links (twitter, ruby-survey.com, code.fellipebrito.com)
  - Inline embeds — likely YouTube/Spotify on never-enough, a-beautiful-day, just-keep-swiming (Finding Nemo clip). **TBD: needs browser inspection** — none of the embed iframes/srcs were surfaced by WebFetch.
  - "Sources" block at bottom of one article (the-case-for-christian-skepticism) — bulleted reading list. Treat as optional `ArticleSources` slot.
- Components used: prose container, BlockQuote, ScripturePullQuote (optional), InlineImage (optional), MediaEmbed (optional), ArticleSources (optional)
- Copy: do NOT rewrite. Source verbatim from the per-article dossier file.

### [SECTION: Article navigation] — component: ArticleNavigation
- Placement: end of article body, **before** GlobalFooter.
- Structure: two side-by-side blocks.
  - **Left block** — `← Previous: <prev article H1>` (link to prev article URL)
  - **Right block** — `Next: <next article H1> →` (link to next article URL)
- Edge cases:
  - First article (earliest by date): left block hidden / disabled (right-only layout)
  - Latest article: right block hidden / disabled (left-only layout)
  - Articles with `date: null` (3 known: i-am-recovering-the-divine-voice, i-think-therefore-i-believe, it-is-she): TBD — either appended to end of chain or excluded; Phase 7 decision.
- Components used: ArticleNavigation (×1)

### [SECTION: Recent Post] — component: RecentPostsWidget   *(DEPRECATED in v2)*
- **DEPRECATED** — replaced by ArticleNavigation above. Preserved here for migration reference only; do NOT render in v2.
- Original v1 behavior (for reference): H2 "Recent Post" + 3 BlogCards (latest-3-excluding-self) + "Browse more posts" CTA → /blog/all.

### [SECTION: Newsletter signup] — component: NewsletterSignup
- Heading: H2 — "Get Notifications For Each Fresh Post"
- Form fields/action: **TBD: needs browser inspection** (Framer-native widget; WebFetch could not surface inputs).

### [SECTION: Navigation footer block]
- Heading: H2 — "Navigation"
- Framer template repeats the nav as a footer block above the footer proper. Phase 3 may consolidate.

### [FOOTER] — component: GlobalFooter
