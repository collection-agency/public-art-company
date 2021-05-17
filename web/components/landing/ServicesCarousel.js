import { useState } from 'react'
import { imageUrl } from 'utils/helpers'
import { PortableText } from 'utils/sanity'
import SwiperCore, { Controller, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
//import GalleryNavigation from 'components/GalleryNavigation'

SwiperCore.use([Controller, Navigation, Pagination]);

const ServicesCarousel = ({ items }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  if (!items || items.length === 0)
    return null

  const params = {
    loop: true,
    speed: 600,
  }

  return (
    <div className='min-w-0 md:flex'>
      <div className='md:w-1/2'>
        <Swiper
          onSwiper={setControlledSwiper}
          className=''
          {...params}
        >
          {items.map(item => {
            const { _key, text } = item
            return (
              <SwiperSlide key={`${_key}_b`} className='swiper-no-swiping'>
                {text &&
                  <PortableText blocks={text}  />
                }
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className='h-96 md:h-auto md:w-1/2'>
        <Swiper
          controller={{ control: controlledSwiper }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          pagination={{ clickable: true }}
          className='h-full'
          {...params}
        >
          {items.map(item => {
            const { _key, image } = item
            return (
              <SwiperSlide key={`${_key}_a`} className='md:px-20'>
                {image &&
                  <div className='h-full bg-cover bg-center' style={{ backgroundImage: `url(${imageUrl(image, 960, 960)})` }} role='img' aria-label={image && image.alt}></div>
                }
              </SwiperSlide>
            )
          })}
          {/*<CarouselNavigation />*/}
        </Swiper>
      </div>
    </div>
  )
}

export default ServicesCarousel
