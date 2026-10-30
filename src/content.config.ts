import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { existsSync, readdirSync } from 'node:fs';
import { glob, type Loader } from 'astro/loaders';

const hasMarkdownFiles = (base: string) =>
  existsSync(base) &&
  readdirSync(base, { recursive: true }).some((file) => /\.mdx?$/.test(String(file)));

const emptyLoader = (name: string): Loader => ({
  name: `empty-${name}`,
  async load({ store }) {
    store.clear();
  },
});

const editorialLoader = (name: string, base: string) =>
  hasMarkdownFiles(base)
    ? glob({ pattern: '**/*.{md,mdx}', base })
    : emptyLoader(name);

const blog = defineCollection({
  loader: editorialLoader('blog', './src/content/blog'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: editorialLoader('projects', './src/content/projects'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    link: z.string().optional(),
    github: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
