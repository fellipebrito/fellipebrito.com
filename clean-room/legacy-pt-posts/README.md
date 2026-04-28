# Legacy Portuguese posts — held for translation

Source: `github.com/fellipebrito/fellipebrito.com/_posts/pt/`
Imported: 2026-04-28
Count: 101 markdown files

These are Fellipe's Portuguese-language posts from his prior Jekyll-based site (2012–2023). They are NOT part of the Astro `articles` content collection — they sit here, raw, awaiting an LLM translation pass.

## Format
Jekyll-flavored YAML frontmatter:
```
---
layout: post
title: ...
description: ...
image: ...
date: '...T00:00:00-05:00'
tags: [...]
author: Fellipe Brito
lang: pt
---
```

## When translation runs
Per-file workflow (LLM-assisted):
1. Translate title + body verbatim to English (preserve voice; flag idioms / culturally-specific references for review)
2. Convert Jekyll frontmatter → site schema: `title`, `date`, `category`, `slug`
3. Pick a category (Bible / Music / Tech / Golf / Free Thought / Short Stories) based on content
4. Pick an English slug (don't translate Portuguese slug literally; pick one that fits the English title)
5. Write to `clean-room/site/src/content/articles/<en-slug>.md`
6. Add entry to `clean-room/site/src/data/articles.json` and recompute prev/next chain

## Notes for the translator
- Some posts reference Brazilian-specific events (Copa do Mundo 2014, protestos no Brasil, Marina Silva). Keep cultural references — don't Americanize.
- Year-end posts (`tchau-201X`) form a series — preserve the "bye, year X" framing.
- Some posts are short/timely; some are long/reflective. Honor that variation in translation.
- Fellipe's voice in PT: short sentences, fragments OK, personal, conversational. Mirror that in English.
