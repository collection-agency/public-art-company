import { useState } from 'react'

import ServicesCarousel from 'components/landing/ServicesCarousel'

const Services = ({ data }) => {
  if (!data)
    return null

  const { heading, services } = data

  return (
    <section className='border-t border-black'>
      <div className='w-container mx-auto mb-12'>
        <div className='flex flex-col md:flex-row -mx-8'>
          <div className='px-8 py-20'>
            <h2 className='uppercase'>{heading}</h2>
          </div>
          <ServicesCarousel items={services} />
        </div>
      </div>
    </section>
  )
}

export default Services
