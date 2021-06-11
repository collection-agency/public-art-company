import { useState } from 'react'
import { PortableText } from 'utils/sanity'

const About = ({ data }) => {
  if (!data)
    return null

  const { text } = data

  return (
    <section className='border-t border-black'>
      <div className='w-container mx-auto'>
        <div className='py-20 lg:py-24 xl:py-28 2xl:py-36'>
          {text &&
            <PortableText blocks={text} className='text-center w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto text-4xl' renderContainerOnSingleChild />
          }
        </div>
      </div>
    </section>
  )
}

export default About
