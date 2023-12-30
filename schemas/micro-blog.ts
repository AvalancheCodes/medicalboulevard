

export default {
    name: 'microBlog',
    title: 'Micro-Blog',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array', 
        of: [
            {
              type: 'block',
              styles: [{ title: 'Normal', value: 'normal' }],
              lists: [{ title: 'Bullet', value: 'bullet' }],
              // Add other types like 'image' if you want to include images in the rich text
            },
            // Add other block types if needed
          ]
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
        options: {
          isHighlighted: true // Makes this field easily accessible
        }
      },
      {
        name: 'media',
        title: 'Media',
        type: 'image',
        options: {
          hotspot: true, // Enables the selection of what area of the image should always be cropped
        }
      },
      {
        // Optional: include a field for tagging the post as verified or new, etc.
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags'
        }
      },
      {
        // Optional: include a timestamp for when the micro-blog was created or published
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime'
      },
      {
        // Optional: include a reference to a category or type (like "Our Mission")
        name: 'category',
        title: 'Category',
        type: 'string'
      },
      {
        // Optional: include a reference to related posts or content
        name: 'relatedContent',
        title: 'Related Content',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'microBlog' } }]
      },
      // ... Any other fields you find useful
    ]
  };
  