# fellipebrito.com — Information Architecture (v2)

```
/                           Home
/writing                    Writing index (renamed from /blog/all)
/writing/<slug>             Article (×20)
/writing/bible              Category filter
/writing/music              Category filter
/writing/tech               Category filter
/writing/golf               Category filter
/work                       Selected Work (Mateo Hybrid)
/about                      About
/hire                       Work with me
```

Top nav (left → right): `Fellipe Brito` (wordmark → /) | `Writing` | `Work` | `About` | `Hire`.

## Redirects (v1 → v2)

All v1 `/blog/*` URLs should 301-redirect to their `/writing/*` equivalents at deploy:

- `/blog/all` → `/writing`
- `/blog/all/<slug>` → `/writing/<slug>` (×20 articles)
- `/blog/bible` → `/writing/bible`
- `/blog/music` → `/writing/music`
- `/blog/tech` → `/writing/tech`
- `/blog/golf` → `/writing/golf`

## Skipped (Framer "Newsbook" template leakage)

These 4 v1 routes still ship unedited Framer template defaults and contain no Fellipe-authored content. They are out of scope for v2 — do not migrate. Phase 7 should either delete them or 301 to `/`.

- /privacy-policy
- /style-guide
- /licenses
- /passworld

## Articles (×20), grouped by category

True publication dates from `clean-room/sitemap.json` and per-article dossiers (NOT the listing UI's "July 25, 2023" template default).

### Bible (9)
- the-light-the-darkness-cannot-understand   (2025-05-28)
- i-am-recovering-the-divine-voice           (date TBD — Discovery did not surface)
- a-message-from-the-courtyard-friday-reflections   (2025-04-18)
- thanksgiving                                (2024-11-28)
- i-think-therefore-i-believe                 (date TBD — Discovery did not surface)
- just-keep-swiming                           (2024-12-03)   *(slug typo preserved)*
- the-case-for-christian-skepticism           (2024-04-01)
- why-should-i-read-mark                      (2024-10-02)
- a-journey-through-the-gospel-of-john        (2025-04-16)

### Golf (3)
- we-never-lose                               (2026-04-14)   *(newest article on the site)*
- breaking-90-and-the-illusion-of-arrival     (2025-07-21)
- lessons-from-my-first-golf-tournament       (2025-07-14)

### Tech (1)
- ai-where-i-m-drawing-the-line               (2026-02-24)

### Free Thought (4)   *— no public /writing/free-thought index route exists*
- a-conversation-with-my-anxiety              (2025-08-14)
- the-challenge-of-being-a-believer           (2015-04-06)   *(oldest article on the site — predates the Framer rebuild)*
- happy-4th-of-july                           (2023-07-04)
- i-am-not-from-wakanda                       (2023-07-04)

### Music (2)
- never-enough                                (2024-11-05)
- a-beautiful-day                             (2024-08-01)

### Short Stories (1)   *— no public /writing/short-stories index route exists*
- it-is-she                                   (date TBD — Discovery did not surface)

## Other notes

- The route `/404` is listed in `sitemap.xml` but the Framer host returns a real HTTP 404 when accessed directly — the custom 404 page renders only as a fallback for unmatched routes, not at `/404` itself. Phase 7 builds a real 404.
- "Free Thought" and "Short Stories" are CMS categories without matching index routes — open IA decision for Phase 7 / Fellipe.
- The 2015 article (`the-challenge-of-being-a-believer`) inline-references a legacy subdomain `code.fellipebrito.com` that should be checked for liveness during Scaffold.
