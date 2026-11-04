import type { APIRoute } from 'astro';
import { SITE_INDEXING_ENABLED } from '../../site.config.mjs';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site).href;
  const body = SITE_INDEXING_ENABLED
    ? `User-agent: *\nAllow: /\nSitemap: ${sitemapURL}\n`
    : 'User-agent: *\nDisallow: /\n';

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
