import type { CollectionConfig } from 'payload';

export const Skills: CollectionConfig = {
  slug: 'skills',
  fields: [
    {
      name: 'title', // required
      type: 'text', // required
      required: true,
    },
  ],
};
