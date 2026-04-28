# Scaffold — fellipebrito.com clean-room rebuild (Phase 3)

Wireframe-style static HTML scaffold. Single shared stylesheet (`wireframe.css`), no JS, no fonts, no colors beyond grayscale, no external assets. Source of truth is the `clean-room/` tree:

- `clean-room/sitemap.json` + `clean-room/sitemap.md` — IA + per-page metadata
- `clean-room/pages/*.md` — Phase 1 dossiers (verbatim copy lives here)
- `clean-room/wireframes/*.md` — Phase 2 structural wireframes
- `clean-room/components.md` — 12-component inventory
- `clean-room/scaffold/` — this directory (Phase 3 output)

## How to open

From the project root:

```
open clean-room/scaffold/index.html
```

All paths are relative — works from `file://`, no server needed.

## Page count + IA

26 pages: 1 home + 5 blog indexes (`all`, `bible`, `music`, `tech`, `golf`) + 20 articles under `/blog/all/<slug>/`.

## Skipped (4 pages — Framer "Newsbook" template leakage)

`/privacy-policy`, `/style-guide`, `/licenses`, `/passworld` — unedited Framer template defaults, no Fellipe-authored content. Out of scope for the rebuild. The affiliate "Get the Template" link from blog index pages was also stripped (replaced with an HTML comment).

## TBD punch list (carried from Phase 2 → Phase 3)

1. NewsletterSignup form fields, submit action, success/error states (sitewide).
2. Hero images — alt + src on home, 4 category pages, and 20 articles.
3. "Made in Framer" badge — present or not? (Decision: not included.)
4. Mobile menu / hamburger behavior on GlobalHeader.
5. GlobalFooter copyright string.
6. MediaEmbed iframes on `never-enough`, `a-beautiful-day`, `just-keep-swiming`.
7. Inline image src/alt on `thanksgiving`.
8. Whether `/blog/tech` and `/blog/golf` actually render the expected card grids.
9. Whether NewsletterSignup actually renders on the homepage.
10. Whether the "Browse more posts" CTA renders on every article.
11. True publication dates for 3 dateless articles + listing-UI date placeholder bug.
12. Liveness of legacy `code.fellipebrito.com` referenced inline in the 2015 article.

Title-casing oddity preserved verbatim: `The Case for christian skepticism`.
Slug typo preserved verbatim: `just-keep-swiming` (URL stability).

## Next steps

Design pass / real copy / Framer asset migration / form integration.
