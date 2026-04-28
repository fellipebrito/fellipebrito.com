# fellipebrito.com — Component Inventory

Reusable structural components identified during wireframing. Structure described as plain-English props/slots; no styling. TBDs flag items that need browser inspection or Phase-3 decisions.

---

## GlobalHeader   *(v2 — updated for new IA)*

- **Where it appears:** sitewide (all in-scope pages — v2 IA: Home, /writing, /writing/<slug>, /writing/<cat>, /work, /about, /hire)
- **Structure (v2):**
  - Brand link / wordmark: `Fellipe Brito` → `/`
  - Nav links (left → right): `Writing` → `/writing`, `Work` → `/work`, `About` → `/about`, `Hire` → `/hire`
- **Notes / TBDs:**
  - v1 had only Home + Blog and surfaced a "Get the Template" Lemon Squeezy affiliate link (Framer template leakage). Both removed in v2.
  - Mobile menu behavior **TBD: Phase 7 design decision** (hamburger / drawer / collapse).
  - Active-link state styling: TBD Phase 7.

## GlobalFooter   *(v2 — updated for new IA + newsletter)*

- **Where it appears:** sitewide.
- **Structure (v2):**
  - Brand line: `Fellipe Brito`
  - **NewsletterForm** (footer variant) — email field + `Get my Tuesday Notes` submit + 1-line wrapper copy
  - Nav repeat: `Writing` / `Work` / `About` / `Hire`
  - Copyright line: <!-- DRAFT - Fellipe to revise --> `© Fellipe Brito · Bossa Nova Solutions`
  - (Optional) Anti-AI micro-line — Phase 6/7 deferral per `05-recommendations.md`. Mark TBD.
- **Notes / TBDs:**
  - v2 absorbs the v1 Framer "Navigation" footer block — single GlobalFooter is now the only footer surface.
  - "Made in Framer" badge: removed in v2 (we're off Framer).
  - Phase 7 should DRY the nav source so GlobalHeader + GlobalFooter share one nav config.

## NewsletterSignup

- **Where it appears:** sitewide (every public page on the live site renders an H2 "Get Notifications For Each Fresh Post" block — confirmed by Discovery on category index, article, and template pages; presence on the homepage is unconfirmed).
- **Structure:**
  - Heading: H2 — "Get Notifications For Each Fresh Post"
  - Form fields: **TBD: needs browser inspection** — WebFetch could not surface input names, types, action URL, or submit handler.
  - Submit CTA label: **TBD: needs browser inspection**.
  - Success / error states: **TBD: needs browser inspection**.
- **Notes / TBDs:**
  - Likely a Framer-native form widget posting to a Framer endpoint or a connected Mailchimp/ConvertKit/Substack — Discovery found no such 3rd-party iframes in any HTML.
  - Phase 3 needs to either (a) preserve Framer's form action if Fellipe wants to keep it, or (b) replace with a chosen ESP (Mailchimp / ConvertKit / Substack / Buttondown / Resend / etc.) — open product question for Fellipe.

## BlogCard

- **Where it appears:** all blog index pages (5) + the home page Recent Post and Featured Blogs grids + the RecentPostsWidget on every article (20). Effectively used on all 26 in-scope pages.
- **Structure:**
  - Image / thumbnail (alt text not surfaced — **TBD: needs browser inspection**)
  - Category label (string — one of: Golf, Tech, Free Thought, Bible, Music, Short Stories)
  - Title (string)
  - Date (string) — **NOTE:** the live site shows "July 25, 2023" on every card as a Framer template default placeholder. True per-article dates are in `clean-room/sitemap.json` and per-article dossiers. Phase 3 must source the date from the article record, not the listing UI.
  - Link target (URL → `/blog/all/<slug>`)
- **Notes / TBDs:**
  - Card hover state, focus state, image aspect ratio: design decisions for Phase 3 (out of scope here).
  - 3 articles have `date: null` in the manifest (i-am-recovering-the-divine-voice, i-think-therefore-i-believe, it-is-she) — Phase 3 needs Fellipe to supply true dates or display "—" gracefully.

## RecentPostsWidget   *(DEPRECATED in v2)*

> **DEPRECATED — replaced by `ArticleNavigation` in v2; preserved for migration reference.** Do not render in v2; do not migrate.

- **Where it appeared (v1):** every article page (20 articles).
- **Structure:**
  - Heading: H2 — "Recent Post" (note: singular, not "Recent Posts" — preserve the original spelling)
  - Card grid: 3 BlogCards
  - CTA below grid: "Browse more posts" → `/blog/all`
- **Behavior:**
  - Discovery confirmed the **same 3 cards appear on every article page**:
    1. Golf — "We never lose" → `/blog/all/we-never-lose`
    2. Tech — "AI :: Where I'm drawing the line" → `/blog/all/ai-where-i-m-drawing-the-line`
    3. Free Thought — "A Conversation with My Anxiety" → `/blog/all/a-conversation-with-my-anxiety`
  - One observed exception: on the "We never lose" article page itself, the widget swaps in "Breaking 90, and the Illusion of Arrival" in place of the self-link. So the actual rule appears to be **"latest 3 published posts, excluding self"** rather than "static array."
  - Phase 3 decision: either (a) preserve as a static-but-self-aware array, or (b) implement as a derived "latest-N exclude-self" query against the post collection. (b) is cleaner and self-maintains as new posts ship.
- **Notes / TBDs:**
  - 5 articles' dossiers did not capture the "Browse more posts" CTA (i-am-recovering-the-divine-voice, happy-4th-of-july, i-am-not-from-wakanda, never-enough, why-should-i-read-mark). **TBD: needs browser inspection** to confirm whether the CTA renders on every article or is suppressed on a subset.

## ArticleHero

- **Where it appears:** every article page (20 articles).
- **Structure:**
  - Category badge / kicker (string — H2 in dossier convention but typically rendered as small label above the title): e.g. "Golf", "Bible".
  - H1: article title
  - Author byline: "Fellipe Brito" (sitewide constant)
  - Published date (sourced from manifest `date` field, NOT from the listing UI)
  - Hero image (alt + src **TBD: needs browser inspection**)
- **Notes / TBDs:**
  - WebFetch did not return hero image alt or src on any article. Phase 2 / browser inspection needs to enumerate.

## CategoryHero  *(variant — possibly merge with ArticleHero or HomeHero)*

- **Where it appears:** the 4 category index pages (`/blog/bible`, `/blog/music`, `/blog/tech`, `/blog/golf`).
- **Structure:**
  - H1 (category-specific tagline — e.g. "Ancient words. Present meaning. Eternal hope.")
  - H3 subhead (one-sentence elaboration)
  - Hero image: TBD — needs browser inspection.
- **Notes / TBDs:**
  - The full `/blog/all` page reuses the home page's H1 ("Curious About Tech, Faith, and a Better Golf Game?") and has no subhead. The 4 category pages override it with their own. Phase 3 may treat as one parameterized component or two separate ones.

## HomeHero

- **Where it appears:** home page only.
- **Structure:**
  - H1: "Curious About Tech, Faith, and a Better Golf Game?"
  - H3 subhead: "Welcome to my digital notebook—where I share things I'm learning, building, and wrestling with in tech, theology, and golf."
  - Hero image: TBD — needs browser inspection.
- **Notes / TBDs:**
  - Identical H1 as `/blog/all` — could be deduped.

## BlockQuote / ScripturePullQuote / PullQuote

- **Where it appears:** scattered across articles. Patterns observed:
  - **BlockQuote (italic body quote):** Tolkien (the-light-...), Crick / Gould / Darwin / Sagan / Bacon / Keller / C.S. Lewis (i-think-therefore-i-believe), Sermon on the Mount (i-am-not-from-wakanda), hymn lyrics (thanksgiving), Jodie Foster monologue (the-challenge-of-being-a-believer), Philippians (just-keep-swiming).
  - **ScripturePullQuote (with verse reference):** John 1:38, John 5:6, John 6:67, John 9:35, John 11:26, John 20:15, John 21:15 (a-journey-through-the-gospel-of-john); 1 John 1:5, 1 John 1:7 (the-light-the-darkness-cannot-understand); many in i-am-recovering-the-divine-voice.
  - **PullQuote (centered, attributed callout):** "We are always getting ready to live, but never living." - Ralph Waldo Emerson (breaking-90-and-the-illusion-of-arrival).
- **Notes / TBDs:**
  - Phase 3 should decide whether to consolidate into one `BlockQuote` component with optional `attribution`/`reference`/`variant` props or split into 2-3 typed components.

## GreekVerseHeader  *(seen on one article — may be article-specific)*

- **Where it appears:** `a-journey-through-the-gospel-of-john` only. Pattern repeats 7 times in that article.
- **Structure:**
  - Greek phrase line: e.g. **Greek: Τἰ ζητεῖτε; (*Ti zēteite?*)**
  - English translation: e.g. **English: "What do you seek?" (John 1:38)**
- **Notes / TBDs:**
  - Possibly recurs in future articles — treat as a candidate component.

## ArticleSources  *(seen on one article)*

- **Where it appears:** `the-case-for-christian-skepticism` (closing "Sources" bulleted list).
- **Structure:**
  - Heading: "Sources" (H3 in dossier)
  - Bulleted list of book titles + authors
- **Notes / TBDs:**
  - Treat as an optional slot at the bottom of the article body. Singleton today, may grow.

## InlineImage  *(seen referenced in article body — not yet surfaced)*

- **Where it appears:** `thanksgiving` (referenced in body — "this picture you see in this post is their 'leafull' tree").
- **Structure:**
  - src + alt + caption
- **Notes / TBDs:**
  - Image src/alt **TBD: needs browser inspection**. Likely more inline images exist on other articles that WebFetch did not surface.

## MediaEmbed  *(unconfirmed — every embed is TBD)*

- **Where it might appear:**
  - `never-enough` — likely YouTube/Spotify embed of the song
  - `a-beautiful-day` — likely U2 "Beautiful Day" embed
  - `just-keep-swiming` — possible Finding Nemo clip embed
- **Structure:**
  - iframe src + provider + dimensions
- **Notes / TBDs:**
  - **All TBD: needs browser inspection.** Discovery's WebFetch did not surface a single iframe across the corpus.
  - Phase 3 should plan for an oEmbed-style component that handles YouTube and Spotify at minimum.

---

## Categories used (CMS taxonomy)

Pulled from sitemap.json. Used by `BlogCard` category badge and by category index filters.

- Golf (3 articles)
- Tech (1 article)
- Free Thought (4 articles — note: NO `/blog/free-thought` index route exists)
- Bible (9 articles)
- Music (2 articles)
- Short Stories (1 article — note: NO `/blog/short-stories` index route exists)

**TBD for Phase 7 / Fellipe:** "Free Thought" and "Short Stories" are CMS categories that have NO matching public index route. Either (a) add the missing index routes (`/writing/free-thought`, `/writing/short-stories`), (b) merge them into existing categories, or (c) leave the cards visible only on `/writing`.

---

## v2 Components (added Phase 6)

The following components are introduced for the v2 IA (`Home / Writing / Work / About / Hire`). All sitewide-ready unless noted.

## HeroBlock

- **Where it appears:** Home (variant: home), Writing index, Work, About, Hire (variant: page-default).
- **Variants:**
  - `home` — H1 + supporting line + NewsletterForm primary CTA + secondary text link
  - `page-default` — H1 only (optional subhead)
- **Structure:**
  - H1 (string)
  - Optional supporting line / subhead (string)
  - Optional primary CTA slot (NewsletterForm, button, or none)
  - Optional secondary CTA slot (text link, e.g. `Work with me →`)
  - Optional media slot (portrait, mark, illustration — TBD Phase 7)
- **Notes / TBDs:**
  - Reuses or replaces v1's `HomeHero` / `CategoryHero` / `ArticleHero` — Phase 7 may collapse all hero-ish blocks into one parameterized `HeroBlock` or keep them separate. Initial recommendation: keep ArticleHero distinct (it carries article metadata: byline, date, category badge); fold HomeHero + CategoryHero into HeroBlock variants.

## NewsletterForm

- **Where it appears:** HeroBlock (home variant), GlobalFooter, NewsletterInline. Used in 3 placements per R4 funnel research.
- **Structure:**
  - Email input (placeholder: `you@domain.com` — TBD)
  - Submit button — copy: `Get my Tuesday Notes`
  - Optional wrapper / microcopy slot (1 line)
  - Success state (TBD)
  - Error state (TBD)
- **Notes / TBDs:**
  - ESP / form action: TBD Phase 7. Options surveyed in R4: Mailchimp, ConvertKit, Substack, Buttondown, Resend.
  - Submit button copy is fixed sitewide for consistency. Do NOT vary per placement.
  - Form replaces v1's `NewsletterSignup` (Framer-native widget).

## NewsletterInline

- **Where it appears:** Home (mid-page, between AboutTeaser and Footer), /writing index (above footer), /about (above footer). Optional placement on long articles (end-of-article) — Phase 7 decision.
- **Structure:**
  - Full-width container
  - Optional H2 heading (e.g. `Get the Tuesday Notes`)
  - Optional 1-line wrapper copy
  - NewsletterForm
- **Notes / TBDs:**
  - Distinguished from the hero NewsletterForm by full-width treatment + section heading; uses the same underlying NewsletterForm component.

## WorkRow

- **Where it appears:** /work, "Where I've been embedded" section. 3 instances (Facebook, SESAC, Rumblefish).
- **Structure:**
  - Company name (string)
  - Year-range (string, e.g. `2014–2017`) — may be TBD
  - 1-line role / outcome (string)
  - Optional logo (small monochrome mark) — TBD Phase 7
- **Notes / TBDs:**
  - Year-ranges TBD — Fellipe to confirm before Phase 7.
  - Stacked vertical layout per R3 Mateo Hybrid; not a table.

## ClientGrid

- **Where it appears:** /work, "Shipped for" section. 1 instance, 6 cells (2 rows of 3).
- **Structure:**
  - Grid container (2 × 3, responsive collapse to single column on mobile)
  - Each cell: client logo (mono) + client name + link to ClientCaseNote
  - Initial 6 clients: Netflix, NBC, Spotify, QWIRE, PING, Whiskey Social
- **Notes / TBDs:**
  - Logo licensing / sourcing: TBD Phase 7. Some logos may need to be re-drawn or replaced with text wordmarks.
  - Click-through target: per-client `ClientCaseNote` page or anchor — Phase 7 decision (URL pattern: likely `/work/<client-slug>`).

## ClientCaseNote

- **Where it appears:** accessed via ClientGrid click-through. One per client in the grid.
- **Structure:**
  - H1 (client name + project shorthand)
  - 2-paragraph case note (problem / what I shipped / outcome)
  - Optional metadata: year, role, stack
  - Back-link to /work
- **Notes / TBDs:**
  - All copy: <!-- TBD - Fellipe to draft per client -->
  - Phase 7 picks: dedicated routes (`/work/netflix`, `/work/nbc`, ...) or anchor-on-page modal pattern.

## AboutBlock

- **Where it appears:** /about. Single instance, page-level.
- **Structure:** multi-section identity stack (DHH-style). Each sub-section is a single short paragraph with an optional H3.
  - Sub-section 1 — Who I am (lead with Christian; mention Bossa Nova Solutions)
  - Sub-section 2 — `What I do now`
  - Sub-section 3 — `Where I've been` (with link to /work)
  - Sub-section 4 — `What I write about` (with links to /writing/<cat> ×4)
  - Sub-section 5 — `How to find me` (Hire / Tuesday Notes / social links)
- **Notes / TBDs:**
  - Voice: Christian-first, no Christianese, no Latin, no theology nouns, no verses. Fragments OK.
  - All copy currently in DRAFT state — Fellipe to revise.
  - Social links: <!-- TBD - Fellipe to fill -->.

## ContactBlock

- **Where it appears:** /hire. Single instance, page-level.
- **Structure:**
  - Optional 1-2 paragraph context above the form
  - Embedded form wrapper (form-tool TBD: Tally / Typeform / Google Form)
  - 6 fields: Name (req), Email (req), Company / context (req), Project type (dropdown, req), Budget range (dropdown, req), Tell me about your project (textarea, req)
  - Submit button copy: `Tell me about it`
- **Notes / TBDs:**
  - Form-tool decision: TBD Phase 7 (NOVA's lean: Tally per `05-recommendations.md`).
  - Embed via iframe — wrapper styles the container so the form blends with site chrome.
  - Success / error states: TBD per form-tool.

## ArticleNavigation

- **Where it appears:** end of every article page (20 articles), before GlobalFooter. Replaces v1's `RecentPostsWidget`.
- **Structure:**
  - Two side-by-side blocks (responsive: stacked on mobile)
  - Left block: `← Previous: <prev article H1>` (link to prev article)
  - Right block: `Next: <next article H1> →` (link to next article)
- **Behavior:**
  - Ordering: chronological by publication date (manifest `date` field, ascending → "earliest" is first, "latest" is last).
  - Earliest article: no Previous block (right-only or left-empty layout).
  - Latest article: no Next block (left-only or right-empty layout).
  - Articles with `date: null` (3 known): TBD — append to chain or exclude. Phase 7 decision.
- **Notes / TBDs:**
  - Phase 7 implements as a derived query on the article collection, not a hand-maintained array.
