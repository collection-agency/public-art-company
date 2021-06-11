import { useState, useEffect } from 'react'
import { useWindowSize } from 'utils/hooks'
import Container from 'components/Container'

const Header = () => {
  const windowSize = useWindowSize()
  const [isVisible, setIsVisible] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const handleScrollTo = id => {
    const el = document.getElementById(id)
    el.scrollIntoView({behavior: 'smooth'})
  }

  useEffect(() => {
    if (windowSize) {
      const handleScroll = () => {
        const currentScrollY = window.scrollY
        if ((currentScrollY < (windowSize.height * .5)) && isVisible) {
          setIsVisible(false)
        }
        if ((currentScrollY > (windowSize.height * .5)) && !isVisible) {
          setIsVisible(true)
        }
        console.log(isVisible, currentScrollY, windowSize.height)
      }

      window.addEventListener('scroll', handleScroll, { passive: true })

      return () => window.removeEventListener('scroll', handleScroll)
    }

    return null
  }, [isVisible])

  return (
    <header className='fixed inset-0 pointer-events-none z-40'>
      <div className={`absolute inset-0 bg-cream transform transition-transform ${(showMenu ? 'translate-x-0 pointer-events-auto' : '-translate-x-full pointer-events-none')}`}>
        <nav className='h-full py-20'>
          <Container className='h-full'>
            <ul className='h-full flex flex-col justify-around font-sans uppercase text-sm text-4xl'>
              <li>
                <span
                  className='cursor-pointer -mb-1 block'
                  onClick={() => handleScrollTo('story')}>Story</span>
              </li>
              <li>
                <span
                  className='cursor-pointer -mb-1 block'
                  onClick={() => handleScrollTo('projects')}>Projects</span>
              </li>
              <li>
                <span
                  className='cursor-pointer -mb-1 block'
                  onClick={() => handleScrollTo('services')}>Services</span>
              </li>
              <li>
                <span
                  className='cursor-pointer -mb-1 block'
                  onClick={() => handleScrollTo('clients')}>Clients</span>
              </li>
              <li>
                <span
                  className='cursor-pointer -mb-1 block'
                  onClick={() => handleScrollTo('mission')}>Mission</span>
              </li>
              <li>
                <span
                  className='cursor-pointer -mb-1 block'
                  onClick={() => handleScrollTo('contact')}>Contact</span>
              </li>
            </ul>
          </Container>
        </nav>
      </div>
      <div className={`absolute bg-cream top-0 left-0 right-0 py-4 transform transition-transform ${(isVisible ? 'translate-y-0 pointer-events-auto' : '-translate-y-full pointer-events-none')}`}>
        <Container>
          <div className='flex justify-between items-center md:hidden'>
            <div>
              <img
                src='/pac-logo-dark.svg'
                className='cursor-pointer h-4'
                onClick={() => handleScrollTo('hero')} />
            </div>
            <div>
              <div
                className='h-3 w-12'
                onClick={() => setShowMenu(!showMenu)}>
                <div className={`border-t-2 border-gray-400 h-1/2 transition-transform transform ${(showMenu ? 'rotate-12 translate-y-3/4' : 'rotate-0 translate-y-0')}`} />
                <div className={`border-b-2 border-gray-400 h-1/2 transition-transform transform ${(showMenu ? '-rotate-12 -translate-y-3/4' : 'rotate-0 translate-y-0')}`} />
              </div>
            </div>
          </div>
          <nav className='hidden md:block'>
            <ul className='flex justify-between items-center font-sans uppercase text-sm'>
              <li>
                <span
                  className='cursor-pointer -mb-1 block'
                  onClick={() => handleScrollTo('story')}>Story</span>
              </li>
              <li>
                <span
                  className='cursor-pointer -mb-1 block'
                  onClick={() => handleScrollTo('projects')}>Projects</span>
              </li>
              <li>
                <span
                  className='cursor-pointer -mb-1 block'
                  onClick={() => handleScrollTo('services')}>Services</span>
              </li>
              <li>
                <img
                  src='/pac-logo-dark.svg'
                  className='cursor-pointer h-4'
                  onClick={() => handleScrollTo('hero')} />
              </li>
              <li>
                <span
                  className='cursor-pointer -mb-1 block'
                  onClick={() => handleScrollTo('clients')}>Clients</span>
              </li>
              <li>
                <span
                  className='cursor-pointer -mb-1 block'
                  onClick={() => handleScrollTo('mission')}>Mission</span>
              </li>
              <li>
                <span
                  className='cursor-pointer -mb-1 block'
                  onClick={() => handleScrollTo('contact')}>Contact</span>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  )
}

export default Header
