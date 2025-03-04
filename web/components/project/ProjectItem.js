import { imageUrl } from 'utils/helpers'
import ProjectModal from './ProjectModal'

const ProjectItem = ({ doc, isThirds, activeSlug, closeModal, openModal }) => {
  const { title, slug, mainImage } = doc
  return (
    <div
      className={`relative px-4 w-full mb-8 ${(isThirds() ? 'md:w-1/3' : 'md:w-1/2')}`}>
      <div
        className='cursor-pointer h-200 sm:h-250 md:h-300 lg:h-350 xl:h-400 2xl:h-450 bg-cover bg-center'
        style={{
          backgroundImage: `url(${imageUrl(mainImage, 700, 500)})`
        }}
        onClick={openModal}
        onMouseEnter={() => {/*setSectionHeadline(title)*/}}
        onMouseLeave={() => {/*setSectionHeadline(headline)*/}}></div>
        <ProjectModal
          doc={doc}
          isActive={activeSlug === slug}
          closeModal={closeModal} />
    </div>
  )
}

export default ProjectItem
