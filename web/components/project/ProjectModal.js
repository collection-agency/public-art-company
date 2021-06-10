import { useRef } from 'react'
import Head from 'next/head'
import { Transition } from '@headlessui/react'
import { PortableText } from 'utils/sanity'
import { CgArrowLongLeft } from 'react-icons/cg'
import ProjectCarousel from './ProjectCarousel'

const ProjectModal = ({ doc, isActive, closeModal }) => {
  const swiperRef = useRef(null)

  const { title, body, gallery } = doc

  return (
    <Transition
      appear={true}
      unmount={false}
      show={isActive}
      enter='transition-transform duration-1000'
      enterFrom='transform translate-x-full'
      enterTo='transform translate-x-0'
      leave='transition-transform transition-transform duration-1000'
      leaveFrom='transform -translate-x-0'
      leaveTo='transform -translate-x-full'
      className='fixed inset-0 bg-white z-50 overflow-y-scroll overflow-x-hidden'
      afterEnter={() => swiperRef.current.swiper.update()}
    >
      <div className='w-container mx-auto'>
        <div className='flex items-center mb-12 pt-2'>
          <div className='md:w-1/3'>
            <CgArrowLongLeft className='cursor-pointer w-10 h-auto text-dark-gray hover:text-black' onClick={closeModal}/>
          </div>
          <div className='flex-1 text-center font-sans uppercase'>
            <span>Public Art Co.</span>
          </div>
          <div className='w-1/3 hidden md:block'>&nbsp;</div>
        </div>
        <div className='flex flex-wrap lg:flex-nowrap -mx-6 mb-20'>
          {title &&
            <div className='w-full lg:w-1/5 2xl:w-1/3 mb-12 px-6'>
              <h1 className='uppercase font-sans text-xl'>{title}</h1>
            </div>
          }
          {body &&
            <div className='w-full lg:w-4/5 2xl:w-2/3 px-6'>
              <PortableText blocks={body} renderContainerOnSingleChild className='sm:text-columns-2' />
            </div>
          }
        </div>
        {gallery && gallery.length > 0 &&
          <ProjectCarousel swiperRef={swiperRef} gallery={gallery} />
        }
      </div>
    </Transition>
  )
}

export default ProjectModal
