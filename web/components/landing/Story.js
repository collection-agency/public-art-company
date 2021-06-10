import { imageUrl } from 'utils/helpers'
import Container from 'components/Container'
import { PortableText } from 'utils/sanity'

const Story = ({ data }) => {
  if (!data)
    return null

  const { heading, text, image } = data

  return (
    <section className='border-t border-black'>
      <div className='md:w-container md:mx-auto'>
        <div className='md:w-full md:flex'>
          <div className='w-container mx-auto md:w-1/2 md:flex md:-mx-8 pt-20 pb-12'>
            <div className='md:px-8 pb-12'>
              <h2 className='uppercase font-sans text-lg'>{heading}</h2>
            </div>
            <div className='md:px-8'>
              {text &&
                <PortableText blocks={text} renderContainerOnSingleChild />
              }
            </div>
          </div>
          <div className='w-full h-96 md:h-auto md:w-1/2 self-stretch md:ml-16'>
            <div
              className='bg-cover bg-center w-full h-full'
              style={{ backgroundImage: `url(${imageUrl(image, 960, 960)})` }}
              role='img'
              aria-label={image && image.alt} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
