# Wireframe — Work with me (Hire)

- **Slug:** hire
- **URL:** https://www.fellipebrito.com/hire
- **Page type:** hire (page + embedded form)
- **Source:** Phase 5 spec (`05-recommendations.md`) and R4 funnel-ux research (`04-funnel-ux.md` § "Form length", "Personal-site contact-form patterns")

Form-tool TBD — Phase 7 picks Tally / Typeform / Google Form (NOVA's lean: Tally). The wireframe describes the form fields and copy regardless of tool.

## Layout

### [HEADER] — component: GlobalHeader (v2)

### [HERO] — component: HeroBlock (variant: page-default)
- H1: `Work with me`

### [SECTION: Context] — 1-2 paragraph intro (above form)
- Paragraph 1 — what kinds of projects:
  <!-- DRAFT - Fellipe to revise -->
  `I take on three kinds of work: software builds (full product or specific systems), strategy and advisory engagements, and longer-term partnerships.`
- Paragraph 2 — credibility shorthand:
  <!-- DRAFT - Fellipe to revise -->
  `I run Bossa Nova Solutions. Past work: Facebook, Netflix, Spotify, NBC, SESAC, PING, QWIRE, Whiskey Social. The longer version lives on /work.`
  - Inline link: `/work` (text: `the longer version lives on /work` or `see selected work`)

### [SECTION: Contact form] — component: ContactBlock
- Embedded form (form-tool TBD — Tally / Typeform / Google Form). 6 fields per R4 spec:
  1. **Name** — text, required. Label: `Name`.
  2. **Email** — email, required. Label: `Email`.
  3. **Company / context** — text, required, single-line. Label: `Company / context`. Helper text (optional): <!-- DRAFT - Fellipe to revise --> `Company name, or one line about who's reaching out.`
  4. **Project type** — dropdown, required. Label: `Project type`. Options:
     - `Software build`
     - `Strategy & advisory`
     - `Speaking`
     - `Partnership`
     - `Other`
  5. **Budget range** — dropdown, required. Label: `Budget range`. Options:
     - `Under $10k`
     - `$10–25k`
     - `$25–75k`
     - `$75k+`
     - `Not sure yet`
  6. **Tell me about your project** — textarea, required. Label: `Tell me about your project`. Helper text (optional): <!-- DRAFT - Fellipe to revise --> `What you're building, where you're stuck, what you'd want from me.`
- Submit button copy: `Tell me about it`
- Success state: <!-- DRAFT - Fellipe to revise --> `Got it. I'll reply within a few business days.`
- Error state: form-tool default (Phase 7 may override).

### [FOOTER] — component: GlobalFooter (v2)
