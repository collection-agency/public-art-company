module.exports = {
  purge: {
    content: ['./components/**/*.js', './pages/**/*.js', './utils/sanity.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'container': '90%',
      },
      colors: {
        'cream': '#F2F0EC',
        'dark-gray': '#424242',
      },
    },
  },
  variants: {
    extend: {
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
