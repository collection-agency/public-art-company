import { useState } from 'react'
import { urlFor } from 'utils/sanity'
import SwiperCore, { Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import ProjectGallery from './ProjectGallery'

SwiperCore.use([Mousewheel])

const ProjectCarousel = ({ gallery, swiperRef }) => {
  const [activeGallery, setActiveGallery] = useState(null)

  if (!gallery || gallery.length === 0)
    return null

  const params = {
    spaceBetween: 0,
    slidesPerView: 'auto',
    centeredSlides: false,
    loop: false,
    mousewheel: {
      forceToAxis: true,
      preventSwipeThresholdDelta: 120,
      preventSwipeThresholdTime: 3000,
      invert: false
    },
    slideToClickedSlide: false,
    freeMode: true,
    preloadImages: true,
    updateOnImagesReady: true,
  }

  return (
    <div className='flex-grow flex flex-col justify-end mb-20'>
      <Swiper ref={swiperRef} {...params} className='overflow-visible'>
        {gallery.map((item, index) => {
          const {_key, image} = item
          return (
            <SwiperSlide key={_key} className={`w-auto ${index + 1 === gallery.length ? '' : 'pr-12'}`}>
              <img src={urlFor(image).url()} className='cursor-pointer project-carousel-image' onClick={() => setActiveGallery(_key)} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      {gallery.map(item => <ProjectGallery
        key={`gallery_${item._key}`}
        image={item.image}
        isShowing={activeGallery === item._key}
        hide={() => setActiveGallery(null)} />
      )}
    </div>
  )
}

export default ProjectCarousel
