import { useState } from 'react'
import { PortableText } from 'utils/sanity'

import ProjectList from 'components/landing/ProjectList'

const Projects = ({ data }) => {
  if (!data)
    return null

  const { heading, headline = '', projects } = data

  const [sectionHeadline, setSectionHeadline] = useState(headline)

  return (
    <section className='border-t border-black py-20'>
      <div className='w-container mx-auto mb-12'>
        <div className='flex flex-col md:flex-row -mx-8'>
          <div className='px-8'>
            <h2 className='uppercase'>{heading}</h2>
          </div>
          <div className='px-8'>
            <span className='text-xl'>{sectionHeadline}</span>
          </div>
        </div>
      </div>
      <ProjectList
        docs={projects}
        setSectionHeadline={setSectionHeadline}
        headline={headline} />
    </section>
  )
}

export default Projects
