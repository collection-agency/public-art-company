export default {
  name: 'landingStory',
  title: 'Story',
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
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
}
