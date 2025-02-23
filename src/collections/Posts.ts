// posts.ts
import { CollectionConfig } from 'payload/types';

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: [
      'title',
      'author',
      'publishedDate',
      'status',
      'category',
      'tags',
    ],
    group: 'Content',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'slug', 
      type: 'text',
      label: 'Slug',
      required: true,  
      unique: true,  
      admin: {
        position: 'sidebar',
      },
      hooks: {  //  <---  Вот здесь хуки
        beforeValidate: [ //  <---  Хук beforeValidate (выполняется перед валидацией)
          ({ value, data }) => {  //  <---  Функция хука
            if (!value && data.title) { //  Если slug пустой, а title есть
              //  <---  Вот здесь ГЕНЕРАЦИЯ SLUG:
              return data.title
                .toLowerCase()        //  В нижний регистр
                .replace(/ /g, '-')     //  Пробелы на дефисы
                .replace(/[^\w-]+/g, ''); //  Убираем лишние символы
            }
            return value; // Если slug уже есть, возвращаем его
          },
        ],
      },
    },
    {
      name: 'author',
      type: 'relationship',
      label: 'Author',
      relationTo: 'users',
      required: true,
      admin: {
        position: 'sidebar',
      },
      // hasMany: false (по умолчанию)
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Published Date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'category',
      type: 'relationship',
      label: 'Category',
      relationTo: 'categories',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'relationship',
      label: 'Tags',
      relationTo: 'tags',
      hasMany: true,
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
        { label: 'Review', value: 'review' },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Excerpt',
      required: false,
      admin: {
        description: 'Short summary of the post.',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      label: 'Featured Image',
      relationTo: 'media',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
};

export default Posts;