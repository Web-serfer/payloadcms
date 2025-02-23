import type { Block } from 'payload/types';

export const Hero: Block = {
  slug: 'hero', 
  labels: {
    singular: 'Hero Block',
    plural: 'Hero Blocks', 
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Subheading',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media', 
      label: 'Background Image',
    },
    {
      name: 'cta',
      type: 'array',
      label: 'Call to Action',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Button Label',
        },
        {
          name: 'url',
          type: 'text',
          label: 'Button URL',
        },
      ],
    },
  ],
};
