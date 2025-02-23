// categories.ts
import { CollectionConfig } from 'payload/types';

const Categories: CollectionConfig = {
  slug: 'categories', 
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
      label: 'Category Name',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      admin: { position: 'sidebar' },
      unique: true,
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data.name) {
              return data.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
            }
            return value;
          }
        ]
      }
    },
  ],
};

export default Categories;