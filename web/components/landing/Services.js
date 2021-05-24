import { useState } from 'react'

import ServicesCarousel from 'components/landing/ServicesCarousel'

const Services = ({ data }) => {
  if (!data)
    return null

  const { heading, services } = data

  return (
    <section className='border-t border-black'>
      <div className='w-container mx-auto mb-20 lg:mb-0'>
        <div className='flex flex-col lg:flex-row -mx-8'>
          <div className='px-8 pb-12 pt-20 lg:pt-24 xl:pt-28 2xl:pt-36'>
            <h2 className='uppercase'>{heading}</h2>
          </div>
          <ServicesCarousel items={services} />
        </div>
      </div>
    </section>
  )
}

export default Services
