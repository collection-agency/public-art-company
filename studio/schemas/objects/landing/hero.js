export default {
  name: 'landingHero',
  title: 'Hero',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'heading',
      title: 'Headline',
      type: 'text',
      rows: 2,
    },
    {
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      rows: 3,
    },
  ],
}
