// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // [TODO: final url — set once the repo name is decided, e.g. https://<username>.github.io]
  site: 'https://josietrinh.github.io',
  integrations: [sitemap({ filter: (page) => !page.includes('/style-guide') })],
});
