import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://true-potential-talent-xw17.vercel.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
