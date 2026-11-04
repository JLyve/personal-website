import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { writeFile } from 'node:fs/promises';
import { SITE_INDEXING_ENABLED } from './site.config.mjs';

const searchVisibilityHeaders = {
  name: 'search-visibility-headers',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const headers = SITE_INDEXING_ENABLED
        ? ''
        : '/*\n  X-Robots-Tag: noindex, nofollow, noarchive, nosnippet\n';

      await writeFile(new URL('_headers', dir), headers, 'utf8');
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://personal-website-alg.pages.dev',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    searchVisibilityHeaders,
    ...(SITE_INDEXING_ENABLED ? [sitemap()] : []),
  ],
});
