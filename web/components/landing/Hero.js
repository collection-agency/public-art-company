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
        height: '100vh',
        translateY: '0vh'
      },
      {
        translateY: '50vh',
        height: '40vh',
        scrollTrigger: {
          scrub: true,
          start: 0,
          end: 700
        }
      }
    )
    gsap.fromTo(
      element.querySelector('#hero-logo'),
      {
        paddingTop: '30vh',
      },
      {
        paddingTop: '0vh',
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
        paddingTop: '30vh',
        color: '#FFFFFF',
      },
      {
        paddingTop: '100vh',
        color: '#424242',
        scrollTrigger: {
          scrub: true,
          start: 0,
          end: 400
        }
      }
    )
    gsap.fromTo(
      element.querySelector('#hero-intro'),
      {
        paddingTop: '70vh',
      },
      {
        paddingTop: '10vh',
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
    <section className='relative text-center' ref={ref}>
      <div id='hero-image' className='absolute top-0 left-0 right-0 bg-cover bg-center' style={{
        backgroundImage: `url(${imageUrl(image, 1920, 1080)})`,
      }}></div>
      <div className='relative'>
        <div id='hero-logo' className='text-white text-5xl'><span>Public Art Co.</span></div>
        <div id='hero-headline' className='text-3xl uppercase'><p>{headline}</p></div>
        <div id='hero-intro' className='text-2xl pb-40'><p>{intro}</p></div>
      </div>
    </section>
  )
}

export default Hero
