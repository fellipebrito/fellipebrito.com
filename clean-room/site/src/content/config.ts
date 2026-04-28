import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date().nullable(),
    category: z.enum(['Bible', 'Music', 'Tech', 'Golf', 'Free Thought', 'Short Stories']),
    // Optional hand-written meta description / social preview blurb.
    // Falls back to autoExcerpt(body) in [slug].astro when omitted.
    description: z.string().optional(),
    // True for posts auto-translated from the legacy Portuguese archive
    // (github.com/fellipebrito/fellipebrito.com/_posts/pt/). When true, the
    // article surface renders an "AI-translated" notice with a contact link.
    translated_from_pt: z.boolean().optional(),
    // Original Portuguese filename slug, kept for traceability
    original_pt_slug: z.string().optional(),
  }),
});

export const collections = { articles };
