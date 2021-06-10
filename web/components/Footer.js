import Link from 'next/link'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { PortableText, urlFor } from 'utils/sanity'

const Footer = ({ config }) => {
  if (!config)
    return null

  const {
    social,
    contactEmail,
    footer
  } = config

  return (
    <footer className='bg-dark-gray text-white py-20'>
      <div className='w-container mx-auto'>
        <div className='pb-10 border-b border-white mb-6'>
          <div className='flex justify-between -mx-6'>
            <div className='max-w-400 px-6'>
              <div className='text-2xl uppercase mb-4'><img src='/pac-logo-light.svg' className='w-full' /></div>
              {footer && footer.text &&
                <PortableText blocks={footer.text} renderContainerOnSingleChild className='hidden md:block'/>
              }
            </div>
            {footer && footer.graphic &&
              <div className='flex-none px-6'>
                <img src={urlFor(footer.graphic).url()} style={{
                  maxWidth: '115px'
                }} />
              </div>
            }
          </div>
          {footer && footer.text &&
            <PortableText blocks={footer.text} renderContainerOnSingleChild className='w-full mt-20 md:hidden'/>
          }
        </div>
        <div className='flex justify-between md:items-center'>
          {social && (social.instagram || social.instagram || social.facebook) &&
            <div className='flex items-center flex-wrap md:flex-nowrap'>
              <div className='w-full md:w-auto mb-2 md:mb-0pr-20 md:text-lg'>
                <span className='font-sans'>Stay in touch</span>
              </div>
              <div className='w-full md:w-auto flex items-center'>
                {social.instagram &&
                  <a href={`https://instagram.com/${social.instagram}`} className='w-8 h-8 bg-white rounded-full mx-2 ml-0 md:ml-2 flex justify-center items-center'>
                    <FaInstagram className='w-3/5 h-3/5 text-dark-gray'/>
                  </a>
                }
                {social.twitter &&
                  <a href={`https://twitter.com/${social.twitter}`} className='w-8 h-8 bg-white rounded-full mx-2 flex justify-center items-center'>
                    <FaTwitter className='w-1/2 h-1/2 text-dark-gray'/>
                  </a>
                }
                {social.facebook &&
                  <a href={`https://facebook.com/${social.facebook}`} className='w-8 h-8 bg-white rounded-full mx-2 flex justify-center items-center'>
                    <FaFacebookF className='w-1/2 h-1/2 text-dark-gray'/>
                  </a>
                }
              </div>
            </div>
          }
          {contactEmail &&
            <div className='text-right'>
              <span className='md:text-lg font-sans'>Drop us a line at <a href={`mailto:${contactEmail}`} className='underline underline-under'>{contactEmail}</a></span>
            </div>
          }
        </div>
      </div>
    </footer>
  )
};

export default Footer
