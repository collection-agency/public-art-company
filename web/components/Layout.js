import Header from 'components/Header'
import Footer from 'components/Footer'
import Breakpoint from 'components/Breakpoint'

const Layout = ({ children, config }) => {
  return (
    <div className='overflow-x-hidden'>
      <Header config={config} />
      <main>{children}</main>
      <Footer config={config} />
      {process.env.NODE_ENV === 'development' &&
        <Breakpoint />
      }
    </div>
  )
}

export default Layout
