import { useRef, useEffect } from 'react'
import { imageUrl } from 'utils/helpers'
import Container from 'components/Container'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals('ScrollTrigger', ScrollTrigger)

const Hero = ({ data }) => {
  if (!data)
    return null

  const ref = useRef(null)

  useEffect (()=>{
    const element = ref.current
    gsap.fromTo(
      element.querySelector('#hero-image'),
      {
        translateY: '0vh'
      },
      {
        translateY: '-30vh',
        scrollTrigger: {
          scrub: true,
          start: 0,
          end: 600
        }
      }
    )
    gsap.fromTo(
      element.querySelector('#hero-logo'),
      {
        transform: 'translateY(0)',
      },
      {
        transform: 'translateY(-50vh)',
        scrollTrigger: {
          scrub: true,
          start: 0,
          end: 700
        }
      }
    )
    gsap.fromTo(
      element.querySelector('#hero-headline'),
      {
        color: '#FFFFFF',
        transform: 'translateY(10vh)'
      },
      {
        color: '#424242',
        transform: 'translateY(30vh)',
        scrollTrigger: {
          scrub: true,
          start: 0,
          end: 400
        }
      }
    )
  },[])

  const { headline, image, intro } = data

  return (
    <section id='hero' className='relative text-center' ref={ref}>
      <div id='hero-image' className='absolute top-0 left-0 right-0 bg-cover bg-center h-screen' style={{
        backgroundImage: `url(${imageUrl(image, 1920, 1080)})`,
      }}></div>
      <div className='relative' style={{
        paddingTop: '50vh'
      }}>
        <div id='hero-logo' className='text-white text-5xl absolute text-center w-full transform px-12' style={{
          top: '40vh',
        }}><img src='/pac-logo-light.svg' className='max-w-screen-lg mx-auto' /></div>
        <div id='hero-headline' className='w-container max-w-screen-lg mx-auto pt-24'>
          <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl uppercase font-sans'>{headline}</p>
        </div>
        <div id='hero-intro' className='w-container mx-auto sm:w-3/4 md:w-1/2' style={{
          marginTop: '50vh'
        }}>
          <p className='text-2xl pb-40'>{intro}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
