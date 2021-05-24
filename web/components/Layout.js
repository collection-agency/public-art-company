import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = ({ children, config }) => {
  return (
    <div className='overflow-x-hidden'>
      <Header config={config} />
      <main>{children}</main>
      <Footer config={config} />
    </div>
  )
}

export default Layout
