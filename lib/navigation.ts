export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'General',
    items: [
      {
        name: 'Home',
        slug: '',
        description: 'Create UI that is shared across routes',
      },
      {
        name: 'About',
        slug: 'about',
        description: 'Organize routes without affecting URL paths',
      },

      {
        name: 'Blog',
        slug: 'blog',
        description: 'Organize routes without affecting URL paths',
      },

      {
        name: 'Contact',
        slug: 'contact',
        description:
          'Streaming data fetching from the server with React Suspense',
      },
    ],
  },
  {
    name: 'Professional',
    items: [
      {
        name: 'Resume',
        slug: 'resume',
        description:
          'Create meaningful loading UI for specific parts of an app',
      },
      {
        name: 'Project Portfolio',
        slug: 'error-handling',
        description: 'Create error UI for specific parts of an app',
      },
      {
        name: 'About This Site',
        slug: 'site',
        description: 'About This Site',
      },
    ],
  },
  {
    name: 'Creative',
    items: [
      {
        name: 'Music',
        slug: 'ssg',
        description: 'Generate static pages',
      },
      {
        name: 'Design',
        slug: 'ssr',
        description: 'Server-render pages',
      },
    ],
  },
];
