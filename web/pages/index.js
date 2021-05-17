import { getClient } from 'utils/sanity'
import { configQuery } from 'utils/queries'
import Head from 'next/head'
import groq from 'groq'

import Layout from 'components/Layout'
import Seo from 'components/Seo'
import Container from 'components/Container'

import Hero from 'components/landing/Hero'
import Story from 'components/landing/Story'
import Projects from 'components/landing/Projects'
import Services from 'components/landing/Services'
import About from 'components/landing/About'
import Clients from 'components/landing/Clients'
import Mission from 'components/landing/Mission'

const query = groq`
  *[_type == 'landing'][0] {
    ...,
    projects {
      ...,
      projects[] {
        ...,
        'title': reference->title,
        'slug': reference->slug.current,
        'mainImage': reference->mainImage,
        'gallery': reference->gallery
      }
    },
  }
`

const Landing = ({ doc, config }) => {
  return (
    <Layout>
      <Seo config={config} />
      {doc &&
        <>
          <Hero data={doc.hero} />
          <Story data={doc.story} />
          <Projects data={doc.projects} />
          <Services data={doc.services} />
          <About data={doc.about} />
          <Clients data={doc.clients} />
          <Mission data={doc.mission} />
        </>
      }
    </Layout>
  )
}

export const getStaticProps = async () => {
  const doc = await getClient(true).fetch(query)
  const config = await getClient().fetch(configQuery)
  return {
    props: { doc, config } // will be passed to the page component as props
  }
}

export default Landing
