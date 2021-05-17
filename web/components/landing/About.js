import { useState } from 'react'
import { PortableText } from 'utils/sanity'

const About = ({ data }) => {
  if (!data)
    return null

  const { text } = data

  return (
    <section className='border-t border-black'>
      <div className='w-container mx-auto'>
        <div className='py-20'>
          {text &&
            <PortableText blocks={text} className='w-1/2 mx-auto' renderContainerOnSingleChild />
          }
        </div>
      </div>
    </section>
  )
}

export default About
