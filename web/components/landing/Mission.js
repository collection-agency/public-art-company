import { useState } from 'react'
import { imageUrl } from 'utils/helpers'
import { PortableText } from 'utils/sanity'

const Mission = ({ data }) => {
  if (!data)
    return null

  const { heading, intro, image, outro } = data
  return (
    <section>
      <div className='flex flex-col items-center md:justify-between md:h-96 relative py-20'>
        <div className='w-container z-10'>
          <div className='-mx-8 md:flex'>
            <div className='px-8 md:w-1/5 xl:w-1/3 pb-12'>
              <h2 className='uppercase'>{heading}</h2>
            </div>
            {intro &&
              <div className='px-8 md:flex-1 mb-12'>
                <PortableText blocks={intro} renderContainerOnSingleChild className='text-center' />
              </div>
            }
            <div className='px-8 w-1/5 xl:w-1/3 hidden md:block'>&nbsp;</div>
          </div>
        </div>
        {image &&
          <div className='h-72 w-container bg-cover bg-center md:h-full md:w-full md:absolute md:inset-0 z-0 mb-12' style={{ backgroundImage: `url(${imageUrl(image, 960, 960)})` }} role='img' aria-label={image && image.alt}></div>
        }
        {outro &&
          <div className='w-container z-10'>
            <PortableText blocks={outro} renderContainerOnSingleChild className='text-center md:text-2xl' />
          </div>
        }
      </div>
    </section>
  )
}

export default Mission
