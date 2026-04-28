# R3 — Track-Record Patterns
- Date: 2026-04-27
- Method: ~25 web calls (WebFetch + WebSearch). Verbatim quotes preserved where retrieved.
- Scope: one-page work-showcase patterns on personal sites of operators / founders / consultants with mixed employer + client credentials.

---

## A. Patterns (6 distinct)

### Pattern 1: Narrative Bio (paragraph-as-resume)
- **Description:** A single dense opening paragraph that intermixes companies, products, frameworks, books, and accomplishments as inline hyperlinks. No headers, no list. Reads like a literary self-introduction. Credibility comes from name-density and prose rhythm.
- **Examples:**
  - **DHH (world.hey.com/dhh)** — "Made [Basecamp] and [HEY] for the underdogs as co-owner and CTO of [37signals]. Created [Ruby on Rails], [Hotwire], [Kamal], [Omarchy]. Wrote [REWORK]…" Every noun is a link. No "Selected Work" header at all.
  - **Frank Chimero (frankchimero.com/about)** — "For the past 15 years, I've worked as a designer making brands, books, interfaces, and illustrations." Clients listed in bio prose: "Facebook, Microsoft, Nike, The New York Times, The Atlantic, and many early stage startups."
- **Pros:** Voice-forward. Hard to copy. Suggests confidence (no need to itemize). Excellent for high-status operators where the names sell themselves.
- **Cons:** Skimmers miss credentials. Logos-as-words don't trigger pattern recognition. Weak for SEO and for anyone whose ratio of "names" to "narrative" is low.
- **When to use:** When the writer's voice IS the product (writers, founders with strong public persona) and 3-5 instantly-recognizable names can carry the paragraph.

### Pattern 2: Selected Work List (chronological, terse)
- **Description:** Reverse-chrono list, one row per role/project. Each row: company + dates + 1-3 sentence outcome. Headers are minimal ("Work.", "Experience"). Often paired with a separate "Projects." section for side things.
- **Examples:**
  - **Tobias Ahlin (tobiasahlin.com)** — Three sections: **"Work."** / **"Projects."** / **"Blog."** Each work entry: role + company + 1-line description. "Design Engineer at GitHub, working on our brand, GitHub.com, Mona Sans, and more." "Early on at Spotify I lead the UI design for all products and worked with building the design team."
  - **Karri Saarinen (karrisaarinen.com)** — Linear (Co-founder, CEO) → Airbnb (Principal Designer & Design Systems) → Coinbase ("Early design & Head of Design. Created the founding design"). Reverse chrono, leadership verbs.
  - **Frank Chimero** — Header **"Experience"** with date ranges (Creative Director at Modern Treasury 2022–2025, co-founder Abstract acquired by Adobe).
- **Pros:** Scannable. Authoritative. Lets recognizable companies do the heavy lifting. Easy to maintain.
- **Cons:** Boring if names aren't strong. No emotional pull. Reads like a resume.
- **When to use:** When the company list is strong AND the visitor is sophisticated (recruiters, peers). Good baseline default.

### Pattern 3: Case-Study Cards (project-grouped, click-through)
- **Description:** Grid or stack of project cards, each grouped by employer, linking to detail pages. Project IS the unit, employer is the container. Emphasizes craft over title.
- **Examples:**
  - **Brady Voss (hellobrady.com)** — 21 named projects each tagged by employer: "Meta AI Voice – Meta", "Tudum.com – Netflix", "Lasso App – Facebook", "Like Button – Facebook", "Metro UI on Windows Phone – Microsoft". Verbs: "led, designed, pitched, collaborated, pioneered, launched, built, directed, shaped, drove."
  - **Peter Beshai (peterbeshai.com)** — Categories: Writing / Projects / Experiments / Open Source. Project entries note "at Bocoup" or "at Cortico" inline (e.g., "Measurement Lab Visualizations (2016 at Bocoup)").
- **Pros:** Best for visual/craft-heavy work. Visitors can drill into what interests them.
- **Cons:** Demands real case-study content. High maintenance. Per-project pages take effort. Looks empty if you only have 3-4 entries.
- **When to use:** When you have 8+ projects worth detailing AND you can produce real case-study writing.

### Pattern 4: Timeline (chronological visualization)
- **Description:** Vertical or horizontal date-anchored timeline. Major life/career moves as nodes. Companies, books, exits, all sit on one spine.
- **Examples:**
  - **Derek Sivers (sive.rs/about)** — Timeline format with year markers: 1997 "started CD Baby," 1999 "HostBaby," 2008 "sold CD Baby and HostBaby." Books integrated as milestones, not separated.
- **Pros:** Tells a story-arc. Surfaces longevity. Naturally handles exits, pivots, sabbaticals.
- **Cons:** Hard to update gracefully when career is still active. Visual timelines often look amateurish on mobile. Encourages padding (filling in years).
- **When to use:** When the arc itself is the story (long career, dramatic pivot, exit, second act).

### Pattern 5: Hybrid — Detailed Employers + Compact Client List
- **Description:** Mixed-credential master pattern. Salaried/leadership roles get full narrative blocks (logos, dates, outcome paragraphs). Project/agency clients get consolidated into a single dense roster. Implicit hierarchy: "where I worked" > "who I worked with."
- **Examples (THE KEY PATTERN FOR FELLIPE):**
  - **Josh Mateo (joshmateo.com/about.html)** — Three headers: **"What I do" / "It's been a journey" / "Elsewhere"**. Employers (Netflix, Spotify, Square, Amplify, Barbarian) each get a narrative section with logo + dates + first-person leadership verbs ("I lead," "I pioneered," "Led the creative strategy"). Then under Barbarian (2011-2013), one line: **"Worked with clients:"** followed by comma-separated list (GE, Bacardi, WSJ, Bloomberg, Samsung, Facebook, Sears, Dos Equis). Single-line client roster nested inside the employer block — brilliantly compact.
  - **Daniel Burka (danielburka.com)** — Header verbatim: **"Sites and apps I worked on"**. Lists employer-attached projects (Digg, GV, Resolve to Save Lives) with impact metrics ("5 million patients with hypertension and diabetes"). Clients (Flatiron Health, Zipline, Blue Bottle) listed by name — no descriptions, names speak for themselves.
- **Pros:** Honors the difference between "embedded operator" and "project contributor" without hiding either. Client list functions as logo wall in text form. Scales — you can add clients without rebuilding the page.
- **Cons:** Requires the writer to actually rank what mattered most. The "compact" block can feel like a graveyard if not labeled well.
- **When to use:** ANY operator with mixed employer + client credentials. This is the canonical pattern for Fellipe's situation.

### Pattern 6: Logo Wall + Featured-In Strip
- **Description:** Horizontal row(s) of logos under a credibility header ("AS SEEN IN", "TRUSTED BY", "CLIENTS INCLUDE"). Often used as a band above or below the fold. Pure visual social proof, no narrative.
- **Examples:**
  - **Dean Yeong (deanyeong.com)** — Header **"AS SEEN IN"** appears three times on the page; logos: HuffPost, Quora Top Writer, AppSumo, Observer, Lifehack.
  - **Nick Tasler (nicktasler.com)** — "123 FORTUNE 500 CLIENTS" stat alongside logo strip and testimonials.
- **Pros:** Instant pattern-recognition for visitors who skim. Strong above-the-fold trust signal. Cheap to build.
- **Cons:** Looks generic when logos aren't tier-1. Conflates "featured in" with "worked at" — readers can't tell the difference. Easily becomes the "everyone else's logo wall." If logos are weak, hurts more than helps.
- **When to use:** As a SECONDARY band — never as the primary work showcase. Only deploy if 3+ logos are universally recognizable.

---

## B. Mixed-credential handling (employer-vs-client)

Six approaches found, ranked by how cleanly they distinguish the two:

1. **Inline preposition tagging — "at" vs "for/with"** (Peter Beshai, Brady Voss): Each project carries a literal preposition. "Measurement Lab Visualizations (2016 at Bocoup)" reads completely differently from "designed for Netflix." Light-touch, semantically precise. Best when projects are the unit.

2. **Nested client roster inside employer block** (Josh Mateo): Best example found. Detailed employer narratives, then a single compact line — **"Worked with clients: GE, Bacardi, WSJ, Bloomberg, Samsung, Facebook, Sears, Dos Equis"** — sitting INSIDE the Barbarian (agency) section. Implicitly tells the reader: these clients flowed through that role. No ambiguity about whether Mateo was at Bacardi or worked on Bacardi.

3. **Two parallel sections — "Work" + "Projects"** (Tobias Ahlin): Header **"Work."** = salaried roles. Header **"Projects."** = client/side work. Clean separation by section, not by language.

4. **Verb separation — "I worked on" vs "Clients include"** (Daniel Burka): Header **"Sites and apps I worked on"** for hands-on contributions; clients listed namelessly elsewhere. Verb does the heavy lifting.

5. **Prose-blended bio** (Frank Chimero): Mention employers in formal "Experience" list; clients dissolved into a single bio sentence ("…has worked with Facebook, Microsoft, Nike, The New York Times…"). Simple but loses chronology.

6. **Single timeline, no distinction** (DHH, Sivers): Both employers and projects share one stream. Works only when the writer's brand is bigger than any individual credential.

**Best example for Fellipe's situation: Josh Mateo's nested-roster pattern.** It explicitly handles "I was salaried at Facebook" vs "I shipped for Netflix as a contractor" without making it awkward. The compact client list reads like a logo wall in text form while the employer blocks carry the narrative weight.

---

## C. Logo handling

### When logos help
- All logos are universally recognizable (Spotify, Netflix, Facebook, NBC pass; SESAC, PING, Whiskey Social, QWIRE need labels).
- Used as a SECONDARY trust band, not the primary work display.
- Visual treatment is consistent (monochrome row reads as "credibility band"; color grid reads as "everyone's portfolio").

### When logos hurt
- Mixed recognition tier (recognizable + unknown logos in the same row reduces the average — the unknowns drag down the credibility of the famous ones).
- No labeling — viewer can't tell "worked there" from "client" from "featured in."
- Rendered as an above-the-fold hero — feels like a stock-template move, not a personal site.

### Treatment options surveyed
| Treatment | Examples | Verdict for operator-consultant |
|---|---|---|
| Monochrome horizontal row | Dean Yeong "AS SEEN IN" | Use for brand/press logos only |
| Grayscale grid | Generic agency sites | Avoid — looks template |
| Labeled split rows ("Shipped at" / "Shipped for") | Custom hybrid | **Recommended for Fellipe** |
| No-logo text-only roster | Frank Chimero, Mateo's nested list | Strong if names are clean nouns |
| Per-project employer tag (inline) | Brady Voss, Peter Beshai | Best when work is project-grouped |

### Verdict for Fellipe's specific list
His company list splits cleanly:
- **Tier-1 instantly-recognizable:** Facebook, Netflix, Spotify, NBC
- **Tier-2 industry-known but needs context:** SESAC (music rights), Rumblefish (music licensing), QWIRE (cue sheets), PING (golf)
- **Tier-3 needs descriptor:** Whiskey Social

Recommendation: **DO use logos**, but in TWO explicitly-labeled rows:
- Row 1: "Salaried / Embedded" — Facebook, SESAC, Rumblefish (logos with role text)
- Row 2: "Project / Shipped for" — Netflix, NBC, Spotify, QWIRE, PING, Whiskey Social

A single undifferentiated wall would muddle the credibility story. The labeled split converts the mixed-tier liability into a strength — it tells a real career arc (employee → operator-shipper).

---

## D. Framing / verbs surveyed

Verbatim section headers and framing verbs from the sites researched:

| Site | Section header / framing verb |
|---|---|
| Tobias Ahlin | **"Work."** / **"Projects."** / **"Blog."** |
| Frank Chimero | **"Experience"** / **"Select interviews"** / **"Select press"** |
| Daniel Burka | **"Sites and apps I worked on"** |
| Brady Voss | (no umbrella header — projects tagged "– Meta", "– Netflix") |
| Josh Mateo | **"What I do"** / **"It's been a journey"** / **"Elsewhere"** + nested **"Worked with clients:"** |
| DHH | (no header — narrative bio with verbs **"Made," "Created," "Wrote"**) |
| Peter Beshai | **"Projects"** with inline "at [company]" |
| Dean Yeong | **"AS SEEN IN"** |
| Khoi Vinh | **"Khoi is currently Principal Designer at Adobe."** (sentence-as-header) |
| Karri Saarinen | (role + company per row, no umbrella header) |

### Most credible framings for an operator-consultant hybrid

Ranked:

1. **"Selected Work"** — Restrained. Implies curation. Doesn't pretend to be exhaustive. Reads as confident.
2. **"Where I've worked / What I've shipped"** — Personal, active voice, distinguishes role-type if used as twin headers.
3. **"It's been a journey"** (Mateo's choice) — Warmer, narrative. Works if the page already has voice.
4. **"Experience"** — Safe, formal, slightly resume-ish. Fine.
5. **"Sites and apps I worked on"** (Burka) — Honest, hands-on, but verbose.

Avoid:
- "Portfolio" (template energy)
- "Clients" alone (positions you as a vendor, not an operator)
- "My Work" (possessive sounds defensive)
- "As Seen In" as primary (only works as a press/featured-in band)

For Fellipe's mid/senior operator framing, **"Selected Work"** as the section header — paired with the labeled split rows from Section C — gives the right balance: confident curation + honest distinction between embedded and project credentials.

---

## Recommendations for Fellipe (one-page)

### Layout Proposal A — "Mateo Hybrid" (RECOMMENDED)
Pattern 5 + Pattern 6 (labeled). One scrollable page. Inspired directly by Josh Mateo's nested-roster approach, adapted for Fellipe's split.

```
┌──────────────────────────────────────────────────┐
│  Selected Work                                    │
│                                                   │
│  [3-line bio — voice, position, what you ship]    │
├──────────────────────────────────────────────────┤
│  Where I've been embedded                         │
│                                                   │
│  Facebook        2018–2020   [1-line role/outcome]│
│  SESAC           2015–2018   [1-line role/outcome]│
│  Rumblefish      2012–2015   [1-line role/outcome]│
├──────────────────────────────────────────────────┤
│  Shipped for                                      │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐       │
│  │NFLX│ │NBC │ │SPOT│ │QWIR│ │PING│ │WHSK│       │
│  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘       │
│  (each logo links to a 2-paragraph case note)     │
├──────────────────────────────────────────────────┤
│  [optional: testimonial pull-quote]               │
└──────────────────────────────────────────────────┘
```
- Evidence: Josh Mateo's exact pattern works. The "embedded vs shipped for" split converts mixed tiers into narrative.
- Verbs: **"Where I've been embedded" / "Shipped for"** — active, operator-flavored, distinguishes salary vs project unambiguously.
- One page, scannable in 10 seconds, drillable for the curious.

### Layout Proposal B — "Selected Work List" (minimal)
Pattern 2. Closer to Tobias Ahlin / Karri Saarinen. Single reverse-chrono list, no logos, role + company + one outcome line per row.

```
┌──────────────────────────────────────────────────┐
│  Selected Work                                    │
│                                                   │
│  [bio paragraph — Christian-first context lands   │
│   here in voice]                                  │
├──────────────────────────────────────────────────┤
│  Facebook · 2018–2020                             │
│    [one-line outcome]                             │
│                                                   │
│  Shipped for Netflix, NBC, Spotify · 2016–2018    │
│    Music-licensing infrastructure across          │
│    [one-line outcome]                             │
│                                                   │
│  SESAC · 2015–2018                                │
│    [one-line outcome]                             │
│                                                   │
│  Shipped for QWIRE, PING, Whiskey Social · …      │
│    [one-line outcome]                             │
│                                                   │
│  Rumblefish · 2012–2015                           │
│    [one-line outcome]                             │
└──────────────────────────────────────────────────┘
```
- Evidence: Saarinen-style. Works because the line itself starts with either company name (employer) or "Shipped for X, Y, Z" (project). Reader's eye decodes the difference instantly.
- Pros: zero logos to source/maintain. Voice carries. Lowest production cost.
- Cons: Loses the visual punch of recognizable logos — a real cost for Facebook/Netflix/Spotify.

### Verdict
**Go with Proposal A.** Logos earn their seat for Facebook, Netflix, Spotify, NBC. The labeled split ("Where I've been embedded" / "Shipped for") is the cleanest mixed-credential frame found in the research, and it borrows directly from a working production site (Mateo's). Proposal B is the fallback if logo licensing/sourcing creates friction.

### Logo treatment verdict (final)
- Use logos. Two labeled rows, monochrome (single color, ideally a muted neutral against the site background — not full-color, which screams "agency template").
- Row 1 (employers): logo + role text underneath. Row 2 (projects): logo + 2-3 word descriptor underneath ("music licensing", "video pipeline").
- Each logo a click-target → short case note (2-3 paragraphs, no fluff). Don't build full per-project case-study pages on day one — that's Pattern 3 territory and a much bigger commitment.

---

## Sources
- [DHH — world.hey.com/dhh](https://world.hey.com/dhh)
- [Patrick Collison](https://patrickcollison.com)
- [Wes Bos](https://wesbos.com)
- [swyx.io](https://www.swyx.io)
- [Julia Evans](https://jvns.ca/about/)
- [Brendan Gregg](https://www.brendangregg.com)
- [Julian Shapiro](https://www.julian.com)
- [Nathan Barry](https://nathanbarry.com)
- [Maggie Appleton](https://maggieappleton.com)
- [Peter Beshai](https://peterbeshai.com)
- [Josh Mateo — about](https://www.joshmateo.com/about.html)
- [Brady Voss](http://www.hellobrady.com/)
- [Tobias Ahlin](https://tobiasahlin.com)
- [Frank Chimero](https://www.frankchimero.com)
- [Khoi Vinh / Subtraction](https://www.subtraction.com)
- [Karri Saarinen](https://karrisaarinen.com)
- [Daniel Burka](https://danielburka.com)
- [Dean Yeong](https://www.deanyeong.com)
- [Tiago Forte / Forte Labs](https://www.fortelabs.com)
- [John Gruber / Daring Fireball](https://daringfireball.net)
- [Derek Sivers](https://sive.rs/about)
- [Nick Tasler](https://nicktasler.com)
- [Bryan Braun](https://www.bryanbraun.com)
- [Every](https://every.to/about)
- [Bestfolios — SV design leads](https://bestfolios.medium.com/10-fantastic-portfolio-websites-from-silicon-valley-design-leads-2d84b384dba6)

## Could not access
- Brian Lovin (brianlovin.com/about) — repeated 429 rate-limiting
- Paul Stamatiou (paulstamatiou.com/about) — 429
- Guillermo Rauch (rauchg.com) — 429
- Tobi Lutke (tobiaslutke.com) — timeout
- Chris Pennington (chrispennington.com) — timeout
- Jord Walsh, Benjamin Ripley, Jason Zhou — TLS / DNS failures
- Amy Hoy (amyhoy.com) — site only surfaced blog content, no work/about page returned
