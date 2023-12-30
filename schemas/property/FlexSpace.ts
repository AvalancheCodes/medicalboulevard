export default {
    name: 'flexSpace',
    title: 'Flex Space',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Room Name',
        type: 'string',
      },
      {
        name: 'type',
        title: 'Room Type',
        type: 'string',
        options: {
          list: [
            { title: 'Medical', value: 'medical' },
            { title: 'Business', value: 'business' },
          ],
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags',
        },
      },
      {
        name: 'features',
        title: 'Features',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'cta',
        title: 'Call To Action',
        type: 'string',
      },
    ],
  };
  