export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'imageAlt',
      validation: Rule => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'simplePortableText',
    },
    {
      name: 'gallery',
      title: 'Image Gallery',
      type: 'gallery',
    },
    {
      name: 'seoMeta',
      title: 'SEO & Metadata',
      type: 'seoMeta'
    },
  ],

  initialValue: {
    seoMeta: {
      _type: 'seoMeta',
      includeInSitemap: true,
      disallowRobots: false
    }
  },

  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
};
