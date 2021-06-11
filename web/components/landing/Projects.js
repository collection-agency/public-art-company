import { useState } from 'react'
import { PortableText } from 'utils/sanity'

import ProjectList from '../project/ProjectList'

const Projects = ({ data }) => {
  if (!data)
    return null

  const { heading, headline = '', projects } = data

  const [sectionHeadline, setSectionHeadline] = useState(headline)

  return (
    <section id='projects' className='md:border-t border-black py-20 lg:py-24 xl:py-28 2xl:py-36'>
      <div className='w-container mx-auto mb-12'>
        <div className='flex flex-col md:flex-row -mx-8'>
          <div className='px-8 pb-12'>
            <h2 className='uppercase font-sans text-lg'>{heading}</h2>
          </div>
          <div className='px-8'>
            <span className='font-sans text-4xl'>{sectionHeadline}</span>
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
