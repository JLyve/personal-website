import { getCollection } from 'astro:content';
import { existsSync, readdirSync } from 'node:fs';

const hasMarkdownFiles = (directory: URL) =>
  existsSync(directory) &&
  readdirSync(directory, { recursive: true }).some((file) => /\.mdx?$/.test(String(file)));

export function getPublishedNotes() {
  if (!hasMarkdownFiles(new URL('../content/blog', import.meta.url))) return [];
  return getCollection('blog', ({ data }) => data.status === 'published');
}

export function getPublishedProjects() {
  if (!hasMarkdownFiles(new URL('../content/projects', import.meta.url))) return [];
  return getCollection('projects', ({ data }) => data.status === 'published');
}
