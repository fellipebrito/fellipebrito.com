// Custom domain — fellipebrito.com via GitHub Pages
// (DNS apex A records → 185.199.108-111.153, www CNAME → fellipebrito.github.io)
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fellipebrito.com',
  base: '/',
  integrations: [sitemap()],
  redirects: {
    '/blog/all/in-defense-of-saint-thomas': '/blog/all/the-case-for-christian-skepticism',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
