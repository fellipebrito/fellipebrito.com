// Site-wide SEO/metadata defaults. Used by BaseLayout to inject Open Graph,
// Twitter Card, and canonical tags. Pages override per-page via BaseLayout props.

export const SITE = {
  // Canonical host. Forced regardless of where the build is served
  // (fellipebrito.github.io, localhost, preview deploys) so social previews
  // and search engines always point at the live domain.
  url: 'https://fellipebrito.com',
  name: 'Fellipe Brito',
  siteName: 'Fellipe Brito',
  defaultDescription:
    'Christian. Entrepreneur. Creative problem solver. Founder of Bossa Nova Solutions. Past lives at Facebook and SESAC. Now building for PING, QWIRE, UVL, and a few others.',
  // 1200×630 PNG used wherever a page does not pass a custom og:image.
  defaultImage: '/og-default.png',
  locale: 'en_US',
  author: 'Fellipe Brito',
} as const;
