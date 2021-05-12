export default {
  name: 'landingClients',
  title: 'Clients',
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
      name: 'text',
      title: 'Text',
      type: 'simplePortableText',
    },
    {
      name: 'logos',
      title: 'Client Logos',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        {
          title: 'Logo',
          name: 'image',
          type: 'image',
        },
      ],
    },
  ],
}
