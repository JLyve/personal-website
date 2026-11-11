export const homepagePreviewEntries = [
  {
    kind: 'Note' as const,
    title: '[Note title]',
    excerpt: '[Excerpt — a short description of the question, observation, or idea.]',
    featured: true,
    placeholder: true,
  },
  {
    kind: 'Project' as const,
    title: '[Project title]',
    excerpt: '[Excerpt — truthful context about what was tried and what the work demonstrates.]',
    placeholder: true,
  },
  {
    kind: 'Reading' as const,
    title: '[Reading title]',
    excerpt: '[Excerpt — a brief reason this selection belongs in the collection.]',
    placeholder: true,
  },
];
