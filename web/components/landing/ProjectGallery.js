import { Transition } from '@headlessui/react'
import { urlFor } from 'utils/sanity'
import { CgClose } from 'react-icons/cg'

const ProjectGallery = ({ image, isShowing, hide }) => {
  return (
    <Transition
      show={isShowing}
      enter='transition-opacity duration-1000'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      enter='transition-opacity duration-1000'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
      className='fixed inset-0 bg-white z-10 flex justify-center items-center'
    >
      <div className='w-container h-full flex flex-col'>
        <div className='mt-12 flex-grow bg-contain bg-center bg-no-repeat' style={{
          backgroundImage: `url(${urlFor(image).url()})`
        }}></div>
        <div className='pb-12 pt-4 text-center'>
          <span className='text-sm'>{image.caption}</span>
        </div>
      </div>
      <div onClick={hide} className='cursor-pointer absolute top-6 right-10 p-2'>
        <CgClose className='w-6 h-6 text-dark-gray hover:text-black' />
      </div>
    </Transition>
  )
}
export default ProjectGallery
