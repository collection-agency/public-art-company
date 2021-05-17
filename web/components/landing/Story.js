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
        <div className='flex flex-col md:flex-row -mx-8 md:items-center'>
          <div className='w-container mx-auto md:w-auto md:flex'>
            <div className='px-8'>
              <h2 className='uppercase'>{heading}</h2>
            </div>
            <div className='px-8'>
              {text &&
                <PortableText blocks={text} renderContainerOnSingleChild />
              }
            </div>
          </div>
          <div className='px-8'><img src={imageUrl(image, 700, 700)} /></div>
        </div>
      </div>
    </section>
  )
}

export default Story
