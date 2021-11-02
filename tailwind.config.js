const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: 'hsl(26, 100%, 55%)',
      'pale-orange': 'rgb(255, 237, 224)',
      'very-very-dark-blue': 'rgb(29, 32, 38)',
      'dark-gray-blue': 'rgb(104, 112, 125)',
      'gray-blue': 'rgb(182, 188, 200)',
      'light-gray-blue': 'rgb(247, 249, 253)',
      white: 'rgb(255, 255, 255)',
      black: 'rgb(0, 0, 0)',
    },
    extend: {
      fontFamily: {
        kumbh: "'Kumbh Sans', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
