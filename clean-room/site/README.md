# fellipebrito.com — Phase 7 Astro build

Clean Room v2 site. Wireframe-look only — **NO design polish, NO Tailwind, NO color palette, NO custom fonts**.

## Stack

- Astro (latest stable, TypeScript)
- Plain CSS (`src/styles/wireframe.css`)
- No UI library, no design system, no CMS

## Local dev

```bash
cd clean-room/site
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs static HTML to `clean-room/site/dist`.

## Deploy

GitHub Action at `../../.github/workflows/deploy.yml` builds + deploys to GitHub Pages on push to `main`. Will not work until `astro.config.mjs` `site` + `base` are set to the real repo URL.

## IA recap (5 routes)

- `/` — Home
- `/writing` — Writing index (+ category sub-routes: `/writing/bible`, `/writing/music`, `/writing/tech`, `/writing/golf`)
- `/writing/<slug>` — Article (×20, dynamic route)
- `/work` — Selected Work (Mateo Hybrid layout)
- `/about` — About
- `/hire` — Work with me

## NEEDS REVIEW punch list

Search `NEEDS REVIEW` and `DRAFT` across the project to find every marker. Tracking list:

- [ ] `astro.config.mjs` — `site` URL once GitHub repo is set up
- [ ] `astro.config.mjs` — `base` (repo name vs. custom domain root)
- [ ] `src/components/NewsletterForm.astro` — form action / ESP not chosen (Mailchimp / ConvertKit / Substack / Buttondown / Resend)
- [ ] `src/components/ContactBlock.astro` — replace stubbed `<iframe src="about:blank">` with real Tally embed at deploy
- [ ] `src/components/GlobalFooter.astro` — anti-AI tagline (keep or drop?)
- [ ] `src/components/HeroBlock.astro` — hero media slot (portrait / mark / illustration)
- [ ] `src/components/AboutBlock.astro` — social handles (X / LinkedIn / GitHub / etc.)
- [ ] `src/components/WorkRow.astro` × 3 instances on `/work` — Facebook / SESAC / Rumblefish year-ranges + role lines
- [ ] `src/data/clients.json` — 6 ClientCaseNote bodies (Netflix, NBC, Spotify, QWIRE, PING, Whiskey Social)
- [ ] `src/pages/work.astro` — optional testimonial pull-quote (source or omit)
- [ ] `src/data/articles.json` — 3 dateless articles (`i-am-recovering-the-divine-voice`, `i-think-therefore-i-believe`, `it-is-she`) — supply real dates to fix prev/next ordering
- [ ] `src/pages/writing/[slug].astro` — body content placeholder for each of the 20 articles (migration deferred to a future phase; bodies live in `../pages/<slug>.md`)
- [ ] All `<!-- DRAFT - Fellipe to revise -->` copy: hero supporting line, AboutTeaser bio, AboutBlock paragraphs, WorkTeaser pitch, footer copyright, NewsletterInline copy, ContactBlock paragraphs, work bio paragraphs

The `.needs-review` CSS class renders these markers with a yellow background + red dashed border so they are unmissable in the browser.

## Where to find what

```
src/
  layouts/BaseLayout.astro              # html shell + GlobalHeader + slot + GlobalFooter
  components/                            # 16 components
    GlobalHeader, GlobalFooter
    HeroBlock, NewsletterForm, NewsletterInline
    WritingTeaser, WorkTeaser, AboutTeaser
    BlogCard, BlogList
    WorkRow, ClientGrid, ClientCaseNote
    AboutBlock, ContactBlock
    ArticleHero, ArticleNavigation, BlockQuote
  pages/                                 # 10 routes
    index.astro, work.astro, about.astro, hire.astro
    writing/index.astro
    writing/bible.astro, music.astro, tech.astro, golf.astro
    writing/[slug].astro                 # 20 article URLs from getStaticPaths
  data/
    articles.json                        # 20 articles, prev/next chain by date asc
    clients.json                         # 6 clients with NEEDS REVIEW case notes
  styles/wireframe.css                   # outline-box look, .needs-review marker
```

## Reference

Full spec: `../research/05-recommendations.md`. Wireframes: `../wireframes/*.md`. Component contracts: `../components.md`. IA: `../sitemap.md`. Page manifest: `../sitemap.json`.
