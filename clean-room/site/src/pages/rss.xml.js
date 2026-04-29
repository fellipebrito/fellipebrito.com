import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../data/site.ts';
import { autoExcerpt } from '../utils/excerpt.ts';

// RSS feed for /blog. Dated articles only (RSS readers depend on pubDate
// for sorting and dedupe — undated entries are noisy). Description falls
// back to autoExcerpt when frontmatter doesn't supply one. Same fallback
// chain as the per-article <meta description> in [slug].astro.
export async function GET(context) {
  const articles = (await getCollection('articles'))
    .filter((a) => a.data.date)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: `${SITE.siteName} — Writing`,
    description:
      'Bible. Music. Tech. Golf. Tuesday Notes — written Mondays, sent Tuesdays.',
    site: context.site,
    items: articles.map((a) => ({
      title: a.data.title,
      pubDate: a.data.date,
      description: a.data.description ?? autoExcerpt(a.body, 200),
      link: `/blog/all/${a.slug}/`,
      categories: [a.data.category],
      author: SITE.author,
    })),
    customData: `<language>en-us</language>`,
  });
}
