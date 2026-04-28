# R4 — Funnel UX
- Date: 2026-04-27
- Scope: dual-funnel CTA patterns on personal sites (business inquiry + newsletter)
- Method: ~28 web calls (WebFetch + WebSearch). All button copy / hero copy quoted verbatim from the live sites at fetch time.

---

## A. Single vs. dual primary CTA

### When personal sites use ONE primary CTA
- Pure-creator / publisher sites where the business model IS the audience itself (paid newsletter, ad-supported blog). They funnel everything to "Subscribe."
  - Stratechery: only `Subscribe` and `Log In` in the global header; contact is plain text email at bottom of about page.
  - Lenny's Newsletter: hero is one sentence ("Deeply researched product, growth, and career advice for product leaders, founders, and ambitious builders") + `Subscribe`. Social proof "Over 1,200,000 subscribers." No work-with-me CTA anywhere.
  - Naval (`nav.al`): only `Subscribe` (twice in nav). No contact, no work CTA. Audience IS the asset.
  - Andrew Chen: lead CTA is `Subscribe`. No pitch / consulting CTA — the implicit pitch path is "get on a16z's radar by being good."

### When personal sites use TWO primary CTAs
- Operators with a dual revenue model: writing audience AND services / book / speaking / venture.
  - Sahil Bloom: `Get the Newsletter` ("Get Curious") in hero + nav links to `Speaking`, `SRB Holdings`, `SRB Ventures` (each with their own `Learn More`). Newsletter is visually dominant; business is segmented behind nav.
  - Tim Ferriss: hero pushes book/podcast content; `FREE NEWSLETTER` is the conversion CTA. Sponsorship and `Contact Tim Ferriss` live in nav and footer — present, demoted.
  - Every.to: hero `Subscribe` + nav `Consulting` ("Stop Planning Your AI Strategy. Start Executing It"). Two real revenue lines, two CTAs, but `Subscribe` is the hero button.
  - Jordan Raynor (Christian comp): hero pushes the newsletter signup ("100,000+ Christians who receive The Word Before Work devotionals every Monday"); `Speaking` and `Contact` live in nav, not hero.

### What goes wrong with two equal-weight CTAs (evidence)
- Hick-Hyman law: decision time scales with number of equally-weighted choices → users pick neither. Cited in cxl, designstudiouiux, marketingagency.sg.
- Quoted: "Never give two CTAs equal visual weight on the same section of a page... users experience decision paralysis and often choose neither" (designstudiouiux.com).
- Quoted: "Some studies show decreases of up to 266% when multiple competing actions are presented" (cited in CTA placement research). Take with a grain of salt — directionally consistent across sources.
- Email-specific: single-CTA emails see 371% more clicks vs. multi-CTA (HubSpot via VentureHarbour). Web is less stark but the asymmetry rule holds.

### Best-practice: asymmetric primary/secondary
- One dominant button (filled, brand color, in hero). One secondary action (outline button, text link, or nav link only).
- Pattern: `Subscribe` (filled) + `Work with me →` (text link) — Sahil Bloom, Tim Ferriss, Jordan Raynor.
- Dual-CTA hero only justified when the two audiences are non-overlapping AND both are real revenue (Every.to, Julian Shapiro).

---

## B. Above-the-fold CTA placement

### Sites that handle multi-CTA above-the-fold well

| Site | Hero copy verbatim | Above-fold CTAs | Pattern |
|---|---|---|---|
| Sahil Bloom | "Exploring my curiosity sharing what I learn along the way" | `Get the Newsletter` (filled). Nav: Book, Newsletter, Speaking, Contact. | Newsletter dominant; business in nav |
| Tim Ferriss | "My brand-new card game with Exploding Kittens is now a national bestseller!" (rotating book/product hero) | `FREE NEWSLETTER` button. Nav: About, Blog, Books, Podcast, TV, Newsletter. Sponsorship + Contact in footer. | Newsletter as primary; biz demoted |
| Every.to | "The Only Subscription You Need to Stay at the Edge of AI" + "Trusted by 100,000 builders" | `Subscribe` (hero, filled). `Consulting` link in nav. | One dominant CTA, one nav-level commercial |
| Jordan Raynor | "Your work matters for eternity. I'm here to help you see how and what to do about it." | Newsletter form (button copy: `Submit`). Nav: Speaking, Contact. | Christian-positioned; newsletter dominant |
| Julian Shapiro | "I invest in deeptech startups. Are you fundraising for one?" | Investor pitch as hero copy. Nav: Newsletter (separate). | INVERTED: business is hero, audience is nav |
| Pieter Levels | "A few years ago I sold all my stuff to explore the world..." | `Subscribe` near top, "Contact me" link inline in intro. | Dual but informal/inline |
| Lenny's Newsletter | "Deeply researched product, growth, and career advice for product leaders, founders, and ambitious builders." | `Subscribe`. (Dismissal: "No thanks.") | Single CTA only |
| swyx | Hero positions him as "Writer, Founder, Devtools Startup Advisor" | `Subscribe to the newsletter` ("Join >10,000 subscribers...") | No "hire me" above fold; routed via About/Portfolio |

### Hero CTA + nav CTA + footer CTA — does redundancy work?
- Yes, when the **same** CTA is repeated at different scroll depths (Stratechery's `Subscribe` at top, mid-page, footer; Sahil Bloom: `Get Curious` repeated).
- Quoted research: "many successful landing pages use multiple CTAs—placing the same CTA both above the fold and along the scrolling process, which allows visitors to convert at their point of maximum persuasion" (clearvoice.com, kissmetrics).
- Redundancy fails when each repetition is a *different* CTA — visitors then perceive a confused funnel. The fix is repeat the primary, vary only the supporting text.
- Empirically: 91-100% of users scroll past the fold (kissmetrics) → footer signup is non-trivial conversion real estate. Lenny, Stratechery, James Clear all repeat the subscribe form in the footer / end-of-article.

---

## C. Newsletter funnel

### Where newsletter signup lives on personal sites

| Location | Examples | Trade-off |
|---|---|---|
| Hero (above fold) | Lenny's, Sahil Bloom, James Clear, Jordan Raynor, Every.to | Highest visibility; commits the site to the newsletter as primary outcome |
| Sticky top bar | (common pattern, not seen on most personal sites researched) | Always visible, can feel pushy |
| Inline mid-article | Substack default, Stratechery articles | Captures readers who already read 50%+ — high intent |
| Sidebar | Older blogs (rare on modern designs) | Low conversion in 2026 |
| Footer (always-present) | Stratechery, Lenny's, James Clear, Every.to | Catches scrollers; very low cost |
| Dedicated /newsletter page | Sahil Bloom, Sub-/lenny path, Wes Bos style | For deep links from social |
| Modal/popup (exit-intent or scroll) | Lenny's ("No thanks" dismiss) | Lifts conversions but irritates power users |

### Verbatim button copy that converts (quoted from live sites)
- `Subscribe` — Stratechery, Naval, Lenny's, Andrew Chen, Pieter Levels, Every.to (universal default)
- `Get the Newsletter` — Sahil Bloom (action + product noun)
- `Get Curious` — Sahil Bloom hero (brand-flavored verb; pairs with curiosity-themed positioning)
- `Subscribe to the newsletter` + "Join >10,000 subscribers..." — swyx (social proof inline)
- `FREE NEWSLETTER` — Tim Ferriss (price anchor, all caps for visual weight)
- `Sign me up` — Derek Murphy (informal/personal voice)
- `Get Started` — Jon Acuff (low-commitment framing)
- `Enroll in the free email course and get your first lesson today` — James Clear (specific outcome + first-lesson hook; long but high-intent)
- `Submit` — Jordan Raynor (generic, weak; the wrapper text "100,000+ Christians who receive The Word Before Work devotionals every Monday" carries the conversion)

### Christian-positioned creators specifically
- Jordan Raynor: hero is faith-framed ("Your work matters for eternity"). Newsletter is the dominant above-fold outcome. Speaking/contact are nav-only.
- Daniel Im: "Pastor + Author" tagline. Lead CTA is `Start Reading` (content-first), then `Speaking Request` form. Newsletter is implied via "Let's Connect" footer — softer than secular comps.
- Jon Acuff: "Turning Starters into Finishers..." hero. `Get Started` (newsletter) + `ORDER YOUR COPY` (book) + `Book Jon to Speak` (speaking). Three separate CTAs on three different audiences — works because the audiences barely overlap.
- Shawn Blanc: minimal — `Newsletter` link in nav; "Writing about creativity & productivity" tagline; The Focus Course as commercial offering surfaced via footer/nav.
- **Pattern across Christian creators:** lead with mission-flavored hero copy (eternity / calling / work-as-worship language); funnel newsletter as primary; demote speaking/business to nav. None observed using the heavy-handed sales-page playbook common in secular thought-leader sites.

---

## D. Contact-form funnel

### Embed vs. link out — the verdict
- Strong evidence embedded forms > link-out: "less clicking leads to more submitting"; link-outs to Google Forms feel "clunky — visitors leave your site, land on a generic Google page, and some never come back" (reform.app, fableheartmedia).
- Typeform and Tally both embed natively; Google Forms can also be iframe-embedded but the styling looks Google-y unless heavily skinned.
- Caveat: link-out is fine when (a) the form is long/qualifying (visitors who click are higher-intent and tolerate the jump) or (b) you need analytics on link-clicks separated from form submits.

### Form length — research consensus
- Sweet spot: **3-5 fields** for low/mid-commitment forms.
- HubSpot: 4 → 3 fields = 50% lift in completion.
- Imagescape case study: 11 → 4 fields = 120% lift.
- Counter-evidence: a 15-field form lifted conversions 109% in one CXL test — because qualifying questions filter out tire-kickers and *increase* completion among real prospects. For "I want to hire you," more fields can = better.

### Personal-site contact-form patterns observed

| Site | Mechanism | Notes |
|---|---|---|
| Harry Guinness | `mailto:` link — "feel free to drop me an email" | Lowest friction, hardest to qualify |
| Brendan Hufford | "The best way to reach me is on Twitter" + Twitter link | DM-as-intake — informal but signals selectivity |
| Stratechery | `contact@stratechery.com` text only | Email-only; volume control via friction |
| Jordan Raynor | Custom form on `/contact` (multi-step "Two Step" pattern; couldn't fully render contents over fetch) | Suggests pre-qualifying flow |
| Daniel Im | Dedicated `Speaking Request` form | Channel-specific (speaking only, not generic contact) |
| Tim Ferriss | "Sponsorship & Advertising" form (channel-specific) + general `Contact Tim Ferriss` | Segments by inquiry type |

### Pre-qualifying questions — when they help
- Help when: inbound volume > what you can personally answer; you bill for time; you want to filter for fit (budget, scope, religion-aligned project, etc.).
- Hurt when: you're early-stage and need every conversation; the form scares off serendipitous opportunities (introductions, podcast invites, partnership pitches).
- Recommended pre-qualifying fields for "I want to hire / partner with you":
  1. Name + email (required)
  2. Company / role (required — single field)
  3. Project type (dropdown: Consulting / Build / Speaking / Partnership / Other)
  4. Budget range (dropdown — answers "is this person serious?")
  5. Timeline (dropdown: ASAP / 1-3mo / 3-6mo / Just exploring)
  6. Brief description (textarea, required)

That's 6 fields. Below the CXL threshold where qualifying-questions hurt; above the 3-field threshold where you can't filter.

### Best-practice phrasing observed
- "What's the budget?" beats "What's your budget?" (objective vs. personal — Matt Olpinski).
- "When do you need this?" beats "Timeline" (Refrens).
- A friendlier label like "Tell us about yourself" can outperform "Full Name" on lower-commitment forms (wix). For high-intent hire-me forms, plain labels are fine.

---

## E. Coexisting "read me" + "hire me"

Five sites that publish writing AND solicit business inquiries. How they balance:

### 1. Sahil Bloom (sahilbloom.com)
- **Above the fold:** Newsletter dominates. `Get Curious` button + value prop.
- **Nav:** Book, Newsletter, Articles, Speaking (primary row); SRB Holdings, SRB Ventures, Contact (secondary row).
- **Footer:** Newsletter again.
- **Read-me / hire-me split:** newsletter-dominant hero, business via nav. Two separate sub-brands (SRB Holdings/Ventures) keep operator audiences out of the writer audience's way.

### 2. Tim Ferriss (tim.blog)
- **Above the fold:** Book/product feature + `FREE NEWSLETTER`.
- **Nav:** About, Blog, Books, Podcast, TV, Newsletter.
- **Footer:** Sponsorship & Advertising form, Contact, Media Kit.
- **Read-me / hire-me split:** content first, business inquiries firmly in footer. Business types know to scroll.

### 3. Every.to
- **Above the fold:** `Subscribe` is hero CTA. `Trusted by 100,000 builders.`
- **Nav:** Newsletter, Columnists, Podcast, Products, Events, **Consulting**, Store.
- **Read-me / hire-me split:** subscription is the front door; consulting is a clearly named nav item with its own pitch ("AI training, adoption, and innovation—from makers, not management consultants").

### 4. Jordan Raynor (Christian operator analog)
- **Above the fold:** Newsletter form + faith-driven hero ("Your work matters for eternity").
- **Nav:** Speaking, Contact.
- **Footer:** TBD (couldn't fully render).
- **Read-me / hire-me split:** mission-led hero, newsletter as conversion, speaking/contact via nav. Closest template to Fellipe's positioning.

### 5. Julian Shapiro (julian.com) — INVERTED model
- **Above the fold:** "I invest in deeptech startups. Are you fundraising for one?" — business pitch IS the hero.
- **Nav:** X, Home/About, Newsletter (single item).
- **Read-me / hire-me split:** business is hero; writing is supporting credibility material. Works because his "hire me" is high-stakes (raise capital), and his writing is a credibility moat.

---

## F. Anti-patterns

1. **Two equal-weight buttons in the hero.** "Subscribe" + "Hire Me" both filled, both same color, side-by-side. Decision paralysis. Pick ONE primary; demote the other to text link or nav.

2. **Three+ different CTAs above the fold.** Newsletter + Book + Course + Speaking + Contact all visible. Visitors freeze. Tim Ferriss avoids this by making the hero rotate one product and pushing other CTAs to nav/footer.

3. **Generic `Submit` as the only label.** Jordan Raynor's newsletter button is `Submit` — verb tells visitors nothing about what happens. Every modern conversion guide says use action + outcome ("Get Free Lessons", "Send my devotional"). Wrapper copy ("100,000+ Christians who receive...") rescues it but the button itself is weak.

4. **Linking out to a Google Form when an embed would do.** Adds a context switch. Loses the visitor's investment. Acceptable only when the form is genuinely long-form and link-clicks need to be tracked separately.

5. **Newsletter-only with no contact path.** Lenny's, Naval, Stratechery — they can do this because they're known. For someone building reputation, having ZERO business path is leaving money on the table; partners and clients give up and don't email.

6. **Putting "hire me" friction-words in the CTA itself.** A button labeled "Inquire about consulting engagements" performs worse than "Work with me →". Long, formal labels increase perceived commitment cost.

7. **Multi-step "Two Step" hover-modal forms with no preview.** Jordan Raynor's contact has this; it appears to render placeholder Lorem Ipsum first, which is a real conversion killer if it ships in production. If you use multi-step, show progress and the first field immediately.

---

## Recommendations for Fellipe

### 1. CTA hierarchy plan

**Above the fold: ONE primary CTA, ONE secondary text link.**

- Primary (filled button, brand color): newsletter signup. This is the long-game asset; it compounds.
- Secondary (text link or outline button only): `Work with me →` linking to a dedicated page that contains the embedded inquiry form.
- Why newsletter primary, not contact: contact-form intent is rare and high-effort; visitors who want to hire you will hunt for the link. Newsletter intent is fleeting and needs to be captured at peak interest.
- Inverted alternative (Julian Shapiro model): if Fellipe wants to lead with "hire me" because Bossa Nova client work is the immediate revenue priority, make `Work with me` the hero and demote newsletter to nav + footer. Trade-off: harder to compound an audience.

**Nav (top-right, every page):** `Newsletter` link + `Work with me` link. Both equally weighted in nav — the asymmetry is in the hero, not the nav.

**Footer:** Repeat the newsletter form (always-present scroll-end capture) + secondary "Work with me" link + contact-form direct link.

**Mid-article (long-form posts):** Inline newsletter capture once, at ~50% scroll. No popups.

### 2. Newsletter signup placement plan

- **Hero**: full-width form, single email field, one button.
- **End of every article**: full-width form repeated.
- **Footer**: compact form, persistent across all pages.
- **Skip**: exit-intent popups, scroll-popup interrupters, sticky bars. They lift numbers but conflict with a Christian-first / quality-over-volume brand. Jordan Raynor doesn't use them. Stratechery doesn't use them.

### 3. Google Form contact strategy

**Verdict: do NOT link out to a raw Google Form.** Two acceptable patterns:

- **Best (recommended):** `Work with me` button → dedicated `/work` page with an EMBEDDED form (Tally, Typeform, or iframe-embedded Google Form). Page content above the form: 1-2 paragraphs on what kinds of projects Fellipe takes, who his clients are, brief credibility (Bossa Nova client list / outcomes). Form below.
- **Acceptable:** Embedded Google Form via iframe on `/work`. Style it minimally with a dark wrapper to blend with the brand. Skinning a Google Form is rough but workable.
- **Avoid:** "Click here to fill out my Google Form" → external `forms.gle` link. That breaks trust, breaks branding, and breaks conversion.

**Suggested form fields (6):**
1. Name (required)
2. Email (required)
3. Company / context (one-line free text, required)
4. Project type (dropdown: Software build / Strategy & advisory / Speaking / Partnership / Other)
5. Budget range (dropdown: Under $10k / $10-25k / $25-75k / $75k+ / Not sure yet)
6. Tell me about your project (textarea, required)

Optional 7th: "How did you hear about me?" — for attribution. Don't make it required.

### 4. Verbatim button copy suggestions

#### Newsletter signup CTA
| Option | Style | Evidence |
|---|---|---|
| `Subscribe` | Universal default, used by Stratechery, Naval, Lenny's, Andrew Chen | Safe, low-risk |
| `Get the newsletter` | Action + noun | Sahil Bloom variant |
| `Read with me` | Personal, fits Christian-first tone | Bespoke; pairs with "Read me + hire me" framing |
| `Get my Monday note` | Specific (cadence + format anchor) | Pattern from Jordan Raynor's "every Monday" |
| `Send me the weekly` | Conversational; commits to cadence | Compound of Pieter Levels and Sahil Bloom voices |

**Pick:** `Subscribe` if you want zero risk. `Get my Monday note` (or whatever cadence you commit to) if you want personality and a cadence anchor — Christian-creator analogs (Raynor's "every Monday") show this lifts conversion via specificity.

#### "Work with me" CTA
| Option | Style | Evidence |
|---|---|---|
| `Work with me →` | Direct, personal; matches secular operator default | Standard in operator personal sites |
| `Start a project` | Action-led, removes the "ask" framing | Common on freelancer/agency hybrids |
| `Tell me about your project` | Conversational, low-friction | Mirrors form's primary field |
| `Hire Bossa Nova` | Brand-led; routes to company not person | Useful if you want to separate personal brand from agency |
| `Let's build something` | Mission-flavored, fits Christian-entrepreneur tone | Bespoke; pair with hero copy |

**Pick:** `Work with me →` for the nav/secondary text link. `Tell me about your project` for the actual form-submit button (matches the field above it; lower friction than "Submit").

#### Contact-form submit button
| Option | Why |
|---|---|
| `Send` | Minimal, fits the form context |
| `Send your project` | Outcome-named (best practice — never just "Submit") |
| `Tell me about it →` | Conversational, matches field |

**Avoid:** `Submit` (Jordan Raynor's mistake). Generic, action-without-outcome.

---

## What I couldn't access
- `carey-nieuwhof.com` — connection refused.
- `davidkadavy.com` — connection refused.
- `davidperell.com` — connection refused.
- Jordan Raynor's contact and speaking forms rendered with placeholder Lorem Ipsum on fetch — couldn't capture verbatim form fields. Worth a manual check; the multi-step pattern is interesting if it actually works.
- Carey Nieuwhof would have been the second strongest Christian-creator comp (massive newsletter + speaking/coaching business). Re-fetch worth attempting later.
