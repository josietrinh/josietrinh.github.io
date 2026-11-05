// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // [TODO: final url — set once the repo name is decided, e.g. https://<username>.github.io]
  site: 'https://josietrinh.github.io',
  // the about page became lore; keep old links working
  redirects: { '/about': '/lore' },
  integrations: [sitemap({ filter: (page) => !page.includes('/style-guide') })],
});
