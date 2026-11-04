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

const nonEmptyString = z.string().trim().min(1);
const noteFormat = z.enum(['Field Note', 'Deep Note', 'Experiment']);

const noteBase = z.object({
  title: nonEmptyString,
  description: nonEmptyString,
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  tags: z.array(nonEmptyString).optional(),
});

const noteSchema = z.discriminatedUnion('status', [
  noteBase.extend({
    status: z.literal('draft'),
    author: nonEmptyString.optional(),
    format: noteFormat.optional(),
  }),
  noteBase.extend({
    status: z.literal('published'),
    author: nonEmptyString,
    format: noteFormat,
    tags: z.array(nonEmptyString).min(1),
  }),
]).superRefine((note, context) => {
  if (note.updatedDate && note.updatedDate < note.pubDate) {
    context.addIssue({
      code: 'custom',
      path: ['updatedDate'],
      message: 'updatedDate cannot be earlier than pubDate',
    });
  }
});

const blog = defineCollection({
  loader: editorialLoader('blog', './src/content/blog'),
  schema: noteSchema,
});

const projects = defineCollection({
  loader: editorialLoader('projects', './src/content/projects'),
  schema: z.object({
    status: z.enum(['draft', 'published']),
    title: nonEmptyString,
    description: nonEmptyString,
    image: z.string().optional(),
    link: z.string().optional(),
    github: z.string().optional(),
    tags: z.array(nonEmptyString).optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
