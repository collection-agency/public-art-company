module.exports = {
  purge: {
    content: ['./components/**/*.js', './pages/**/*.js', './utils/sanity.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Founders', 'sans', 'ui-sans-serif', 'system-ui', '-apple-system', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      'serif': ['Quadrant', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    },
    extend: {
      width: {
        'container': '90%',
      },
      height: {
        200: '200px',
        250: '250px',
        300: '300px',
        400: '400px',
        500: '500px',
        600: '600px',
        700: '700px',
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
