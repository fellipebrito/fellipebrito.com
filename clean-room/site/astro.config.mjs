// Custom domain — fellipebrito.com via GitHub Pages
// (DNS apex A records → 185.199.108-111.153, www CNAME → fellipebrito.github.io)
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fellipebrito.com',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
