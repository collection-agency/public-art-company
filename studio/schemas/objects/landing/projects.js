export default {
  name: 'landingProjects',
  title: 'Projects',
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
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      title: 'Projects',
      name: 'projects',
      type: 'array',
      of: [
        {
          name: 'project',
          type: 'object',
          title: 'Project',
          fields: [
            {
              name: 'reference',
              type: 'reference',
              title: 'Project',
              to: [
                {type: 'project'},
              ],
            },
          ],
          preview: {
            select: {
              title: 'reference.title',
              image: 'reference.mainImage',
            },
            prepare({ title, image }) {
              return {
                title: title,
                media: image ? image.asset : null
              }
            },
          }
        },
      ],
    },
  ],
}
