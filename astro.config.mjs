import { defineConfig } from 'astro/config';

// לפרסום ל-GitHub Pages:
//   SITE_URL=https://avgilx.github.io BASE_PATH=/rachel-events npm run build
// לבנייה מקומית: npm run build (בלי משתני סביבה)
const site = process.env.SITE_URL || undefined;
const base = process.env.BASE_PATH || undefined;

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  image: { responsiveStyles: false },
  devToolbar: { enabled: false },
});
