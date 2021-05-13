// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import documents
import landing from './documents/landing'
import project from './documents/project'
import config from './documents/config'

// Import objects
import barePortableText from './objects/barePortableText'
import figure from './objects/figure'
import gallery from './objects/gallery'
import imageAlt from './objects/imageAlt'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import seoMeta from './objects/seoMeta'
import simplePortableText from './objects/simplePortableText'

// Landing objects
import landingAbout from './objects/landing/about'
import landingClients from './objects/landing/clients'
import landingHero from './objects/landing/hero'
import landingMission from './objects/landing/mission'
import landingProjects from './objects/landing/projects'
import landingServices from './objects/landing/services'
import landingStory from './objects/landing/story'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    barePortableText,
    figure,
    gallery,
    imageAlt,
    internalLink,
    landing,
    landingAbout,
    landingClients,
    landingHero,
    landingMission,
    landingProjects,
    landingStory,
    landingServices,
    link,
    portableText,
    project,
    seoMeta,
    simplePortableText,
    config,
  ]),
})
