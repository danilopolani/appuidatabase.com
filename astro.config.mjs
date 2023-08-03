import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import alpinejs from "@astrojs/alpinejs";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.appuidatabase.com',
  integrations: [tailwind(), vue(), alpinejs(), sitemap()],
  experimental: {
    assets: true
  }
});