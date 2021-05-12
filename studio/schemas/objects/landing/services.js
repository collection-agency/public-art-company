export default {
  name: 'landingServices',
  title: 'Services',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      title: 'Services',
      name: 'services',
      type: 'array',
      of: [
        {
          name: 'service',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'simplePortableText',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
          ],
          preview: {
            select: {
              title: 'text',
              media: 'image.asset',
            },
          },
        },
      ],
    },
  ],
}
