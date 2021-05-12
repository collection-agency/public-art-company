export default {
  title: 'Image Gallery',
  name: 'gallery',
  type: 'array',
  options: {
    layout: 'grid',
  },
  of: [
    {
      title: 'Image',
      name: 'figure',
      type: 'object',
      fields: [
        {
          title: 'Image',
          name: 'image',
          type: 'figure',
        },
      ],
      preview: {
        select: {
          media: 'image.asset',
        },
      },
    }
  ],
}
