import { CollectionConfig } from 'payload/types';

const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Tag Name',
      required: true,
      unique: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      admin: {
        position: 'sidebar',
      },
      unique: true,
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data.name) {
              return data.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
            }
            return value;
          },
        ],
      },
    },
  ],
};

export default Tags;