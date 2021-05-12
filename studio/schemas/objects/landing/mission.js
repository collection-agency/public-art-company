export default {
  name: 'landingMission',
  title: 'Mission',
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
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 3,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'outro',
      title: 'Outro',
      type: 'text',
      rows: 3,
    },
  ],
}
