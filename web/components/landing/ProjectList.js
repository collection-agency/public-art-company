import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ProjectItem from 'components/landing/ProjectItem'

const ProjectList = ({ docs, setSectionHeadline, headline }) => {
  const router = useRouter()
  const { pathname, query } = router

  if (!docs || docs.length === 0)
    return null

  const updateQuery = slug => {
    let newQuery = router.query

    if (slug === undefined) {
      delete newQuery['project']
    } else {
      newQuery['project'] = slug
    }

    router.push({
      pathname,
      query: newQuery,
    }, undefined, { shallow: true });
  }

  const closeProject = () => {
    const queryCopy = queryCopy
    delete queryCopy['project']
    router.push({
      pathname,
      query: {
        ...query,
        'project': slug
      },
    }, undefined, { shallow: true });
  }

  useEffect(() => {
    console.log(router.query.project)
  }, [router.query.project])

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
        {docs.map((doc, index) => <ProjectItem
          key={doc._key}
          doc={doc}
          isThirds={() => isThirds()}
          activeSlug={router.query.project}
          openModal={() => updateQuery(doc.slug)}
          closeModal={() => updateQuery()} /> )}
      </div>
    </div>
  )
}

export default ProjectList
