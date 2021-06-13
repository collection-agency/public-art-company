import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'

const Trees = () => {
  return (
    <div className='absolute inset-0 filter blur-md pointer-events-none z-30 opacity-70'>
      <img
        id='tree-1'
        src='/trees/tree_002.svg'
        className='absolute right-0 transform translate-x-1/2'
        style={{
          height: '800px',
          top: '100px'
        }}/>
      <img
        id='tree-2'
        src='/trees/palm_02.svg'
        className='absolute left-0 transform -translate-x-1/2 h-600'
        style={{
          height: '600px',
          top: '150vh'
        }}/>
      <img
        id='tree-3'
        src='/trees/palm_02.svg'
        className='absolute right-0 transform translate-x-1/2 h-600'
        style={{
          height: '600px',
          bottom: '120vh'
        }}/>
    </div>
  )
}

export default Trees
