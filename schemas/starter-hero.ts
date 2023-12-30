export default {
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Enables hotspot positioning for responsive images
        },
      },
      {
        name: 'ctaLabel',
        title: 'CTA Label',
        type: 'string',
      },
      {
        name: 'ctaLink',
        title: 'CTA Link',
        type: 'url',
      },
    ],
  };
  