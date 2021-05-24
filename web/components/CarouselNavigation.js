import { CgArrowLeft, CgArrowRight } from 'react-icons/cg'

const CarouselNavigation = () => {
  return (
    <div className='hidden md:block'>
      <div className='absolute left-0 top-0 w-8 h-full flex items-center pointer-events-none'>
        <div className='swiper-button-prev w-full h-8 z-10 pointer-events-auto'>
          <CgArrowLeft className='w-full h-full text-dark-gray hover:text-black' />
        </div>
      </div>
      <div className='absolute right-0 top-0 w-8 h-full flex items-center pointer-events-none'>
        <div className='swiper-button-next w-full h-8 z-10 pointer-events-auto'>
          <CgArrowRight className='w-full h-full text-dark-gray hover:text-black' />
        </div>
      </div>
    </div>
  )
}

export default CarouselNavigation
