import { getCollection } from 'astro:content';

export function getPublishedNotes() {
  return getCollection('blog', ({ data }) => data.status === 'published');
}

export function getPublishedProjects() {
  return getCollection('projects', ({ data }) => data.status === 'published');
}
