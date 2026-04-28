// Strip Markdown / HTML cruft from a body string and return a plain-text
// excerpt suitable for <meta description> and og:description (~155 chars
// is the safe Google snippet cap). Used as the fallback when an article
// has no hand-written `description` in its frontmatter.
export function autoExcerpt(body: string, max = 155): string {
  const text = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^#+\s+/gm, '')
    .replace(/[*_]{1,3}([^*_\n]+)[*_]{1,3}/g, '$1')
    .replace(/^>\s+/gm, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[.,;:!?\-—]+$/, '') + '…';
}
