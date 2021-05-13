export default {
  name: 'landing',
  type: 'document',
  title: 'Landing',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'landingHero',
    },
    {
      name: 'story',
      title: 'Story',
      type: 'landingStory',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'landingProjects',
    },
    {
      name: 'services',
      title: 'Services',
      type: 'landingServices',
    },
    {
      name: 'about',
      title: 'About',
      type: 'landingAbout',
    },
    {
      name: 'clients',
      title: 'Clients',
      type: 'landingClients',
    },
    {
      name: 'mission',
      title: 'Mission',
      type: 'landingMission',
    },
    {
      name: 'seoMeta',
      title: 'SEO & Metadata',
      type: 'seoMeta',
    },
  ],

  initialValue: {
    story: {
      heading: 'Story',
    },
    projects: {
      heading: 'Projects',
    },
    services: {
      heading: 'Services',
    },
    clients: {
      heading: 'Clients',
    },
    mission: {
      heading: 'Mission',
    },
    seoMeta: {
      _type: 'seoMeta',
      includeInSitemap: true,
      disallowRobots: false
    }
  },
};
