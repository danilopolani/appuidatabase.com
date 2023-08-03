import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.appuidatabase.com',
  integrations: [tailwind(), vue(), alpinejs()],
  experimental: {
    assets: true
  }
});