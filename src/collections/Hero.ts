import type { CollectionConfig } from 'payload';

export const Hero: CollectionConfig = {
  slug: 'hero',
  fields: [
    {
      name: 'slogan', // required
      type: 'text', // required
      required: true,
    },
  ],
};
