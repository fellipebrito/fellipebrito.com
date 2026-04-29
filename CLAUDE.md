# fellipebrito.com — project context

Personal brand site for Fellipe Brito. Astro static site, deployed to GitHub Pages.
**Live at:** https://fellipebrito.com (custom domain, HTTPS).
**Repo:** github.com/fellipebrito/fellipebrito.com (default branch: `main`).
**Old Jekyll site preserved:** `legacy-jekyll` branch on origin.

## Roadmap + Editorial — read at session start

Two living docs at repo root drive the work:

- **`ROADMAP.md`** — strategic roadmap (new surfaces: books, watch, lab, etc.). Phase-organized, items checked off as shipped.
- **`EDITORIAL.md`** — editorial track (LinkedIn slate, deeper edits, voice patterns to lean into / retire). Picked from when Fellipe wants to amplify or polish existing essays.

At the start of every session NOVA must:

1. Read both docs in full.
2. Identify the next move — usually the unchecked Phase item with the fewest blockers, or an editorial item if Fellipe is in writing/sharing mode.
3. Surface any open questions blocking it.

When work ships, check the matching item off in `ROADMAP.md` (or update `EDITORIAL.md`) in the same commit as the work. Update the "Last updated" line at the bottom of whichever doc changed.

## Stack
- **Astro 5** with **Tailwind 4** via `@tailwindcss/vite` plugin
- **IBM Plex Sans + Mono** via Google Fonts in BaseLayout
- Tokens defined in `clean-room/site/src/styles/global.css` `@theme` block
- No JS framework. Astro content collection for articles.

## Repo layout
```
clean-room/site/                  → Astro app (the deployable)
  src/components/                 → Astro components
  src/content/articles/           → 112 article markdown files
  src/data/articles.json          → article manifest + prev/next chain
  src/data/clients.json           → client list w/ phase: past | current
  src/data/products.json          → 4 own products w/ App Store + Play links
  public/logos/                   → 16 brand + app logos (svg + png)
  public/CNAME                    → fellipebrito.com (persists across builds)

clean-room/legacy-pt-posts/       → 101 raw Jekyll PT posts (archive — already translated)
clean-room/pages/                 → Phase 1 dossiers (verbatim Framer capture, reference)
clean-room/wireframes/            → Phase 2 wireframes (reference, may be stale)
clean-room/research/              → Pattern/funnel/identity research (reference)
clean-room/COPY-WORKSHOP.md       → Copy iteration with Claude Desktop

claude.output.log                 → Full audit trail (every phase + decision)
.github/workflows/deploy.yml      → Astro GH Pages deploy via withastro/action@v3
```

## URL structure (preserved from Framer for SEO equity)
- `/` home
- `/blog/all` writing index · `/blog/all/<slug>` articles (×112)
- `/blog/{bible,music,tech,golf}` category filters
- `/work`, `/about`, `/hire`, `/recommendations`

## Content
- **22 original English** articles + **90 AI-translated from Portuguese** = 112 total
- Translated articles have `translated_from_pt: true` in frontmatter; ArticleHero renders an amber-tinted notice with link to `/hire` for typo reports
- Article schema: `src/content/config.ts` (title, date, category enum, optional translated_from_pt + original_pt_slug)

## Locked design decisions
- **H1 (home):** `Christian. Entrepreneur. Creative problem solver.` — line-broken via `\n` in HeroBlock
- **Background:** warm paper `#FBFAF7` (newspaper feel, not stark white)
- **Accent:** navy `#1E3A8A` (primary action) + amber `#B45309` (decorative emphasis, `<mark>` highlighter)
- **Type scale:** major third (1.25)
- **Mood:** **modern minimalist with personality** — NOT 1998 brutalism (Fellipe rejected those refs). References: buttondown.com + bounties.sh
- **Image treatment (logos):** `filter: grayscale(100%) contrast(105%)`, opacity 0.7, hover 1.0. Single-color silhouettes flatten cleanly; multi-color marks (SESAC, Warner) preserve internal contrast (do NOT use `brightness(0)`).

## Voice & positioning (locked)
- Christian-first — but **no Christianese / Latin / verses in marketing copy** (saved for blog body)
- Tuesday Notes — written Mondays, sent Tuesdays
- Audience: clients/partners (primary) + writing readers (secondary)
- Tone: short sentences, fragments OK, personal, conversational
- Footer anti-AI line links to `/blog/all/ai-where-i-m-drawing-the-line`
- Selected Work uses Mateo Hybrid layout: Where I've been embedded → Shipped for (logo only) → Currently building with → My products

## Components — conventions
- **`LogoMaybe.astro`** — single source of truth. `AVAILABLE_LOGOS` map (slug → ext). Add a slug there to enable a logo everywhere it's referenced.
- **`WorkRow`** — slot-based for rich role lines; `<strong><mark>…</mark></strong>` for bold+highlight
- **`ClientCaseNote`** — `displayOnly: 'logo' | 'card'` controls past vs current rendering
- **`TestimonialQuote`** — `logoSlug` prop adds company logo to the attribution
- **`ProductCard`** — `links: { ios?, android? }` renders App Store · Google Play

## Integrations (live)
- **Buttondown** newsletter — username `fellipebrito`. Form posts to `https://buttondown.com/api/emails/embed-subscribe/fellipebrito` from `NewsletterForm.astro`.
- **Tally** contact form — id `1AbyAQ`. Embedded on `/hire` via `ContactBlock.astro` (iframe + tally `embed.js` script).
- Google Workspace email (MX records on GoDaddy — not part of this project, do not modify).

## Operations
```bash
# Local dev
cd clean-room/site && npm install && npm run dev      # http://localhost:4321

# Build (verifies before commit)
cd clean-room/site && npm run build                    # 122 routes → dist/

# Deploy
git push origin main                                   # triggers Action; ~3 min
```

### articles.json regeneration
When articles are added/edited/dated, run a Python script that walks `src/content/articles/*.md`, parses frontmatter, sorts by date asc, recomputes prev/next. **Canonical script lives in `claude.output.log`** under the iteration entries — copy it forward, don't re-derive.

## Hard-won gotchas — DO NOT
- Run `npm install` from the project root — it creates a stray root `package.json` that broke CI once. **Always `cd clean-room/site` first.**
- Apply `filter: brightness(0)` to multi-color logos — flat-blacks SESAC/Warner into silhouettes. **Use `grayscale(100%)` alone.**
- Auto-Americanize Brazilian cultural references in PT translations (keep "Flamengo", "Marina Silva", "Copa", etc.)
- Silent-correct URL slugs (e.g., `just-keep-swiming` typo) — only change when caller authorizes; SEO equity matters
- Use Anthropic / Claude attribution in commits, PRs, GitHub content. **Always `Generated by NOVA`** per `~/.claude/nova-identity.md`.
- Commit as `Claude <noreply@anthropic.com>` — applies to **cloud Claude Code runs too** (claude.ai/code, GitHub App). Before any commit, the agent must run:
  ```
  git config user.name "Fellipe Brito"
  git config user.email "fellipe@bossanovasolutions.com"
  ```
  Author = the human responsible. Provenance lives in the commit body (`Generated by NOVA`), not the author line.
- Bundle unrelated changes in one commit when separate logical units make sense

## Active TODOs (as of 2026-04-29)
- 3 testimonials without logos: Steve Schaaf (FDF), Stephen Rollins (Gabstin LLC), Gideon Arom (AllTrack) — Fellipe to source if wanted
- Masters article (`we-never-lose`) wants real photos — Fellipe's Instagram (instagram.com/fellipeeduardo) is blocked from WebFetch; he'll provide images manually
- ~~Hero portrait: faceless intentional for now~~ — RETIRED 2026-04-29. Portrait now lives on `/about` (Cristo Redentor / Brazil 10 jersey). Custom og-about.png card uses same photo. Home hero remains text-only.
- Hero media slot in HeroBlock: still open question; home hero left empty

## Reference: Phase log
Full project history (Phases 1-7 + iteration rounds + design phase + translation + deploy) lives in `claude.output.log` (~1000 lines). Includes every prompt, agent invocation, decision, and revision. Read this if you need context on WHY a thing is the way it is.
