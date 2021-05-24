import { useState } from 'react'
import { imageUrl } from 'utils/helpers'
import { PortableText } from 'utils/sanity'
import Marquee from 'react-marquee-slider'

const Clients = ({ data }) => {
  if (!data)
    return null

  const { heading, text, logos } = data
  return (
    <section className='py-20'>
      <div className='w-container mx-auto mb-20'>
        <div className='-mx-8 md:flex'>
          <div className='px-8 pb-12'>
            <h2 className='uppercase'>{heading}</h2>
          </div>
          {text &&
            <PortableText blocks={text} className='px-8 md:w-1/2 lg:w-1/3 xl:w-1/4' renderContainerOnSingleChild />
          }
        </div>
      </div>
      <div className='logo-marquee-wrapper'>
        <Marquee className='align-center' velocity={50}>
          {logos.map(image => (
            <div key={image._key} className={'w-1/2 sm:w-1/3 md:w-1/4 py-4 px-4 md:px-8 lg:px-' + (logos.length > 7 ? '12' : '24')}>
              <img className='client-logo' src={imageUrl(image, 200, 200)} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default Clients
