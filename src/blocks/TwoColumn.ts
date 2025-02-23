import type { Block } from 'payload/types';

export const TwoColumn: Block = {
  slug: 'twoColumn',
  labels: {
    singular: 'Two Column Block',
    plural: 'Two Columns Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
    },
    {
      name: 'text',
      type: 'textarea',
      label: 'Text',
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'media',
    },
    {
      name: 'direction',
      label: 'Direction',
      type: 'select',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Reverse', value: 'reverse' },
      ],
      defaultValue: 'default',
      required: true,
    },
  ],
};
