import Container from 'components/Container'

const Header = () => {
  const handleScrollTo = id => {
    const el = document.getElementById(id)
    el.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <header className='bg-cream top-0 left-0 right-0 fixed py-4 z-50'>
      <Container>
        <nav>
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
    </header>
  )
}

export default Header
