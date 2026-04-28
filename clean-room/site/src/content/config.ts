import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date().nullable(),
    category: z.enum(['Bible', 'Music', 'Tech', 'Golf', 'Free Thought', 'Short Stories']),
  }),
});

export const collections = { articles };
