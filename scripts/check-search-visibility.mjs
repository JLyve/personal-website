import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_INDEXING_ENABLED } from '../site.config.mjs';

const distDirectory = fileURLToPath(new URL('../dist/', import.meta.url));

async function findHTMLFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? findHTMLFiles(path) : [path];
  }));

  return files.flat().filter((file) => file.endsWith('.html'));
}

const htmlFiles = await findHTMLFiles(distDirectory);
const robots = await readFile(join(distDirectory, 'robots.txt'), 'utf8');
const headers = await readFile(join(distDirectory, '_headers'), 'utf8');
const outputFiles = await readdir(distDirectory);
const sitemapFiles = outputFiles.filter((file) => file.startsWith('sitemap'));

if (SITE_INDEXING_ENABLED) {
  if (!robots.includes('Allow: /') || sitemapFiles.length === 0 || headers.includes('X-Robots-Tag')) {
    throw new Error('Launch search visibility is not configured consistently.');
  }
} else {
  for (const file of htmlFiles) {
    const html = await readFile(file, 'utf8');
    if (!html.includes('name="robots" content="noindex, nofollow, noarchive, nosnippet"')) {
      throw new Error(`Missing pre-launch robots metadata: ${file}`);
    }
  }

  if (!robots.includes('Disallow: /')) {
    throw new Error('Pre-launch robots.txt does not block crawling.');
  }

  if (!headers.includes('X-Robots-Tag: noindex, nofollow, noarchive, nosnippet')) {
    throw new Error('Pre-launch Cloudflare X-Robots-Tag header is missing.');
  }

  if (sitemapFiles.length > 0) {
    throw new Error(`Pre-launch build must not publish a sitemap: ${sitemapFiles.join(', ')}`);
  }
}

console.log(`Search visibility check passed (${SITE_INDEXING_ENABLED ? 'launch' : 'pre-launch'} mode).`);
