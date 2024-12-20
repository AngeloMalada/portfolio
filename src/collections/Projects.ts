import type { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
  slug: 'projects',
  fields: [
    {
      name: 'title', // required
      type: 'text', // required
      required: true,
    },
    {
      name: 'description', // required
      type: 'text', // required
      required: true,
    },
  ],
};
