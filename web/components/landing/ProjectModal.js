import Head from 'next/head'
import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { PortableText } from 'utils/sanity'
import { CgArrowLongLeft } from 'react-icons/cg'
import ProjectCarousel from './ProjectCarousel'

const ProjectModal = ({ doc, isActive, closeModal }) => {
  const [galleryActive, setGalleryActive] = useState(false)
  const { title, body, gallery } = doc

  return (
    <Transition
      appear={true}
      show={isActive}
      enter='transition-transform duration-500'
      enterFrom='transform translate-x-full'
      enterTo='transform translate-x-0'
      leave='transition-transform duration-700'
      leaveFrom='transform translate-x-0'
      leaveTo='transform -translate-x-full'
      className='fixed inset-0 bg-white z-50'
    >
      <div className='w-container mx-auto mb-20'>
        <div className='flex items-center mb-12 pt-2'>
          <div className='md:w-1/3'>
            <CgArrowLongLeft className='w-10 h-auto text-dark-gray hover:text-black' onClick={closeModal}/>
          </div>
          <div className='flex-1 text-center'>
            <span>Public Art Co.</span>
          </div>
          <div className='w-1/3 hidden md:block'>&nbsp;</div>
        </div>
        <div className='flex flex-wrap lg:flex-nowrap -mx-8 mb-20'>
          {title &&
            <div className='w-full lg:w-1/4 xl:w-1/3 mb-12 px-8'>
              <h1 className='uppercase'>{title}</h1>
            </div>
          }
          {body &&
            <div className='w-full lg:w-3/4 xl:w-2/3 px-8'>
              <PortableText blocks={body} renderContainerOnSingleChild className='sm:text-columns-2' />
            </div>
          }
        </div>
        <div>
          {gallery && gallery.length > 0 &&
            <ProjectCarousel gallery={gallery} setGalleryActive={setGalleryActive} />
          }
        </div>
      </div>
    </Transition>
  )
}

export default ProjectModal
