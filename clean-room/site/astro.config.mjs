// Initial deploy: project page URL.
// When custom domain (fellipebrito.com) is wired, switch site → 'https://fellipebrito.com'
// and base → '/'.
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fellipebrito.github.io',
  base: '/fellipebrito.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
