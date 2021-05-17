import { imageUrl } from 'utils/helpers'
const ProjectList = ({ docs, setSectionHeadline, headline }) => {
  if (!docs || docs.length === 0)
    return null

  let wasThirds = true
  let k = 0

  const isThirds = () => {
    if (wasThirds) {
      if (k > 1) {
        k = 0
        wasThirds = false
      } else {
        k++
      }
      return true
    } else {
      if (k > 0) {
        k = 0
        wasThirds = true
      } else {
        k++
      }
      return false
    }
  }

  return (
    <div className='w-container mx-auto'>
      <div className='flex flex-wrap -mx-4'>
        {docs.map((doc, index) => {
          const { _key, title, slug, mainImage } = doc
          return (
            <div
              key={_key}
              className={`px-4 w-full mb-8 ${(isThirds() ? 'md:w-1/3' : 'md:w-1/2')}`}>
              <div
                className='cursor-pointer h-72 bg-cover bg-center'
                style={{
                  backgroundImage: `url(${imageUrl(mainImage, 700, 500)})`
                }}
                onMouseEnter={() => setSectionHeadline(title)}
                onMouseLeave={() => setSectionHeadline(headline)}></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectList
