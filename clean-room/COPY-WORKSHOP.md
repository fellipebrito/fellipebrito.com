# Copy Workshop — for Claude Desktop

This file collects every piece of draft copy on the site that needs your revision. Take it into Claude Desktop, work through each item, paste the final copy back into NOVA, and NOVA will apply the edits to the right files.

## Voice constraints (from `nova-identity.md`)
- Short sentences. Fragments allowed.
- Christian-first but **no Christianese, no Latin, no bare verses** in the hero/marketing surfaces (R2 anti-pattern).
- Visible thinking, verbal pivots, simple endings.
- "I prefer better questions than easier answers."

## Audience reminder
- **Primary:** potential clients / business partners (mixed faith backgrounds — they need to see Christian + Entrepreneur + Builder, not feel preached at)
- **Secondary:** writing readers

## Positioning anchors (locked at Phase 5)
- Hero (verbatim, do not touch): `Christian. Entrepreneur. Builder of tools that last.`
- Newsletter brand: `Tuesday Notes` (written Mondays, sent Tuesdays)
- Track-record framing: `Embedded at … Shipped for … Currently building with …`

## Reference material you have

### Sam Kling letter (SESAC, Chief Creative Officer)
The strongest narrative material for About / hero supporting copy. Quote-mineable lines:
- *"In a world of probabilities, where circumstances often predetermine outcomes, Fellipe Brito is an absolute improbability — a phenomenon that defies conventional expectations."*
- *"I first encountered Fellipe's remarkable journey while working together at SESAC a decade ago. Little did I know that when Facebook recruited him, our paths would intertwine again at Qwire, Inc."*
- *"Born in a remote corner of Brazil, Fellipe's ascent to prominence is extraordinary. A self-taught technologist and visionary leader."*
- *"He possesses a unique blend of engineering, architecture, and project management."*
- *"Bossa Nova Solutions (Fellipe's post-Meta brainchild)."*
- *"12 out of 10-star results."*
- *"Honestly, it's almost annoying."* — voice line, you can use as a self-deprecating sign-off somewhere
- *"In an industry often marred by opportunistic ambiguity and opacity."* — strong "anti-vendor" framing

### Other testimonials available (Recommendation Letters.pdf — already used Scott Freiman on /work)
- Muhammad Qasim (CIO at SESAC) — "game-changer"; "embedded fashion … hard to distinguish the Bossa Nova team members from our own employees"
- Gideon Arom (CTO at AllTrack) — "absolute joy"; "positive energy and the exceptional expertise"
- Stephen Rollins (CTO at Gabstin LLC) — "balances technical skill with a deep understanding of business needs"
- Steve Schaaf (VP/CTO at FDF) — "comprehensive project management and innovative solutions"

### Screenshots (Framer DB)
Confirmed 17 articles have dates; 3 are still dateless in your Framer DB (`i-am-recovering-the-divine-voice`, `i-think-therefore-i-believe`, `it-is-she`). NOVA needs you to assign real dates for those 3.

---

## Items to revise

### Item 10 — Hero supporting line
**File:** `clean-room/site/src/pages/index.astro` (passed as `supporting` prop to `<HeroBlock variant="home">`)

**Current draft:** *(none — supporting prop is currently passed in `index.astro`. Check that file for the current value. As of writing, NOVA expects you to draft this.)*

**Constraints:**
- One line. Two sentences MAX.
- Lands beneath: `Christian. Entrepreneur. Builder of tools that last.` (the locked H1)
- Should mention: Bossa Nova Solutions + at least one credibility hook (employer or client name)
- Cannot drop Netflix/NBC/Spotify per Fellipe's correction — they're recognizable and stay as past credit

**NOVA suggestions to react against (don't use verbatim, but useful poles):**
- Conservative: *"Founder of Bossa Nova Solutions. Embedded at Facebook, SESAC. Shipped for Netflix, NBC, Spotify."*
- Voice-y: *"Bossa Nova Solutions. Past lives at Facebook and SESAC. Currently building with the people who'd rather ship something that works than ship something on time."*
- Sam-Kling-flavored: *"Self-taught technologist. Bossa Nova Solutions — the post-Meta brainchild. 12 out of 10-star results, occasionally."*

---

### Item 11 — NewsletterForm hero microcopy
**File:** `clean-room/site/src/pages/index.astro` (passed as `microcopy` prop to `<HeroBlock variant="home">`)

**Current draft:** *(probably empty — check index.astro)*

**Purpose:** small line of text under or near the hero newsletter form, explaining what Tuesday Notes is.

**Length:** 1 sentence, ~10–18 words.

**NOVA suggestions:**
- *"Faith, tech, and the work that lasts. Written Mondays. Sent Tuesdays."*
- *"One Tuesday note. From me. About what I'm building, reading, and praying through."*
- *"Tuesday Notes — short emails on faith, tech, and the work that lasts."*

---

### Item 12 — AboutTeaser bio (home page section)
**File:** `clean-room/site/src/components/AboutTeaser.astro`

**Current draft (verbatim):**
```
H2: Who I am

Christian first. Entrepreneur second. Founder of Bossa Nova Solutions, building tools in golf, faith, and education.

I write Tuesday Notes on faith, tech, and the work that lasts.
```

**Goal:** 2 lines. Tease who you are. Funnel to /about.

**Notes:**
- "Christian first. Entrepreneur second." is a structurally strong line — keep it or tweak; don't lose the order.
- Sam Kling's "Born in a remote corner of Brazil" angle is a possible 2nd-line variant.

---

### Item 13 — AboutBlock 5 sub-sections (the /about page)
**File:** `clean-room/site/src/components/AboutBlock.astro`

This is the LONGEST piece. It's the meat of /about. 5 sub-sections, all currently DRAFT.

**Sub-section 1 — Who I am (no heading, lead paragraph)**
Current draft:
```
I'm Fellipe. Christian first. Entrepreneur. Software architect.

I run Bossa Nova Solutions — a small studio building tools in golf, faith, and education. I write here weekly.
```

**Sub-section 2 — What I do now (H3)**
Current draft:
```
Most days: building Bossa Nova Solutions. Software, advisory, and a couple of products of my own.

Specific work areas: golf (training tools, course apps), faith (study tools and church-side software), education (learning tools that respect the learner).
```

**Sub-section 3 — Where I've been (H3)** *(NOVA already updated the company list)*
Current draft:
```
Embedded at Facebook, SESAC, Rumblefish. Shipped for Netflix, NBC, Spotify. Currently building with PING, QWIRE, Whiskey Social, Tee Time Trainer, UVL, Season Seek.

Long version → see selected work.
```
*This sub-section may be the right place for a Sam-Kling-flavored 1–2 sentence backstory ("Born in a remote corner of Brazil … self-taught …").*

**Sub-section 4 — What I write about (H3)**
Current draft:
```
Four threads: Bible, Music, Tech, Golf.

Tuesday Notes goes out weekly — written Mondays, sent Tuesdays.
```

**Sub-section 5 — How to find me (H3)** *(NOVA already wired your social handles in.)*
The 4 social links are now live: LinkedIn, GitHub (NOVA repo), Instagram, SoundCloud. Nothing to revise unless you want to.

---

### Item 14 — WorkTeaser pitch line (home page section)
**File:** `clean-room/site/src/components/WorkTeaser.astro`

**Current draft (verbatim):**
```
Embedded at Facebook and SESAC. Shipped for Netflix, NBC, Spotify. Currently building with PING, QWIRE, Whiskey Social, Tee Time Trainer, UVL, Season Seek.
```

**Goal:** 1–2 lines under the H2 "Selected Work" + logo strip. Tease the work; funnel to /work.

**Note:** Logo strip above this line is `Facebook · Netflix · Spotify · NBC` (recognizable past names). Pitch line currently expands. Either tighten the pitch (and trust the logo strip) or rewrite for voice.

---

### Item 15 — /work page bio + section intros
**File:** `clean-room/site/src/pages/work.astro`

**Current 3-line bio (verbatim):**
```
Christian. Entrepreneur. Software architect.

I build software for companies that need it to last — not trend.

Founder of Bossa Nova Solutions. Embedded at Facebook, SESAC, Rumblefish. Shipped for Netflix, NBC, Spotify. Currently building with PING, QWIRE, Whiskey Social, Tee Time Trainer, UVL, Season Seek.
```

**Section intros to consider drafting:**
- Above "Where I've been embedded" — currently nothing. Could add 1 line of context.
- Above "Shipped for" — currently nothing. Could add 1 line.

**Testimonial (already wired by NOVA):** Scott Freiman / QWIRE quote on "transition into our operations was smooth and virtually undetectable." If you'd rather use a different testimonial (Sam Kling, Muhammad Qasim, Gideon Arom, Stephen Rollins, Steve Schaaf — all available in the PDF), tell NOVA which one.

---

### Item 16 — ContactBlock intro paragraphs (/hire page)
**File:** `clean-room/site/src/components/ContactBlock.astro`

**Current draft (verbatim):**
```
I take on three kinds of work: software builds (full product or specific systems), strategy and advisory engagements, and longer-term partnerships.

I run Bossa Nova Solutions. Past work: Facebook, Netflix, NBC, Spotify, SESAC, Rumblefish. Currently building with PING, QWIRE, Whiskey Social, Tee Time Trainer, UVL, Season Seek. The longer version lives on /work.
```

**Goal:** Make the visitor feel "yes, this person can do my thing" before they hit the form. 2 short paragraphs.

---

### Item 17 — NewsletterInline copy
**File:** `clean-room/site/src/components/NewsletterInline.astro`

**Current default props:**
```
heading: "Get the Tuesday Notes"
copy:    "Tuesday Notes — written Mondays, sent Tuesdays."
```

**Goal:** This is the inline form repeat (mid-article on long posts, end of /writing index, etc.). Heading + 1-line copy. Keep tight.

---

### Item 18 — Footer copyright line
**File:** `clean-room/site/src/components/GlobalFooter.astro`

**Current draft (verbatim):**
```
© 2026 Fellipe Brito · Bossa Nova Solutions
```

**Goal:** Probably fine as-is. Optional voice: *"© 2026 Fellipe Brito · Made by hand. Probably with prayer."* etc. Decide if there's voice you want here, or keep it standard.

**Related decision (separate from the line itself):** the **anti-AI tagline** sits in this same footer. Keep or drop — your call.

---

## How to send revisions back to NOVA

When you're ready, paste back in this format (one block per item you revised):

```
ITEM 12 (AboutTeaser):
H2: Who I am

<your revised line 1>
<your revised line 2>
```

NOVA will apply each block to the right file and verify the build. You don't need to hit every item in one pass — work through whichever ones are bugging you most.
