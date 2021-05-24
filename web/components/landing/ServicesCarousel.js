import { useState } from 'react'
import { imageUrl } from 'utils/helpers'
import { PortableText } from 'utils/sanity'
import SwiperCore, { Controller, Navigation, Pagination, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import CarouselNavigation from 'components/CarouselNavigation'

SwiperCore.use([Controller, Navigation, Pagination, EffectFade]);

const ServicesCarousel = ({ items }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  if (!items || items.length === 0)
    return null

  const params = {
    loop: true,
    speed: 600,
  }

  return (
    <div className='min-w-0 flex flex-wrap md:flex-nowrap px-8'>
      <div className='w-full md:w-1/3 xl:w-1/2'>
        <Swiper
          onSwiper={setControlledSwiper}
          className='h-full'
          effect='fade'
          {...params}
        >
          {items.map(item => {
            const { _key, text } = item
            return (
              <SwiperSlide key={`${_key}_b`} className='swiper-no-swiping pb-12 md:pb-0 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-36 bg-cream self-stretch min-h-0'>
                {text &&
                  <PortableText blocks={text} className='mx-auto w-full xl:w-2/3 2xl:w-1/2' renderContainerOnSingleChild />
                }
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className='h-96 md:h-400 xl:h-500 2xl:h-700 w-full md:w-2/3 xl:w-1/2'>
        <Swiper
          controller={{ control: controlledSwiper }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          pagination={{ clickable: true }}
          className='h-full relative md:transform md:translate-x-12'
          {...params}
        >
          <CarouselNavigation />
          {items.map(item => {
            const { _key, image } = item
            return (
              <SwiperSlide key={`${_key}_a`} className='md:px-12'>
                {image &&
                  <div className='h-full bg-cover bg-center' style={{ backgroundImage: `url(${imageUrl(image, 960, 960)})` }} role='img' aria-label={image && image.alt}></div>
                }
              </SwiperSlide>
            )
          })}
          <CarouselNavigation />
        </Swiper>
      </div>
    </div>
  )
}

export default ServicesCarousel
