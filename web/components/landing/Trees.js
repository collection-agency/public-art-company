import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import { useWindowSize } from 'utils/hooks'

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals('ScrollTrigger', ScrollTrigger)

const Trees = () => {
  const ref = useRef(null)
  const windowSize = useWindowSize()

  useEffect (()=>{
    if (windowSize.height) {
      const element = ref.current

      /*gsap.fromTo(
        element.querySelector('#tree-1'),
        {
          skewX: 20,
        },
        {
          skewX: 50,
          scrollTrigger: {
            scrub: true,
            start: 0,
            end: 800
          }
        }
      )*/
      gsap.fromTo(
        element.querySelector('#tree-1'),
        {
          skewX: -30,
          translateX: '66%',
        },
        {
          skewX: 50,
          translateX: '66%',
          scrollTrigger: {
            scrub: true,
            start: 0,
            end: windowSize.height * 2
          }
        }
      )
      gsap.fromTo(
        element.querySelector('#tree-2'),
        {
          skewX: 30,
          translateX: '-66%',
        },
        {
          skewX: -50,
          translateX: '-66%',
          scrollTrigger: {
            scrub: true,
            start: windowSize.height * 2,
            end: windowSize.height * 4
          }
        }
      )
      gsap.fromTo(
        element.querySelector('#tree-3'),
        {
          skewX: -30,
          translateX: '66%',
        },
        {
          skewX: 50,
          translateX: '66%',
          scrollTrigger: {
            scrub: true,
            start: windowSize.height * 4,
            end: windowSize.height * 6
          }
        }
      )
    }
  },[windowSize])

  return (
    <div ref={ref} className='absolute inset-0 filter blur-md pointer-events-none z-30 opacity-70'>
      {/*<img
        id='tree-1'
        src='/trees/tree_002.svg'
        className='absolute right-0 transform translate-x-2/3 origin-bottom'
        style={{
          height: '800px',
          top: '100px'
        }}/>*/}
      <img
        id='tree-1'
        src='/trees/palm_01.svg'
        className='absolute right-0 transform h-600 origin-bottom'
        style={{
          height: '600px',
          top: '100vh'
        }}/>
      <img
        id='tree-2'
        src='/trees/palm_02.svg'
        className='absolute left-0 transform h-600 origin-bottom'
        style={{
          height: '600px',
          top: '300vh'
        }}/>
      <img
        id='tree-3'
        src='/trees/palm_02.svg'
        className='absolute right-0 transform h-600 origin-bottom'
        style={{
          height: '600px',
          top: '500vh'
        }}/>
    </div>
  )
}

export default Trees
