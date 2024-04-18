/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/*.{html,js}',
  './index.html'],
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'tangerine': '#ff9500',
        'magenta': '#8b1c3f',
        'storm': '#00008c',
      },
      fontFamily: {
        'bebas': ["Bebas Neue", ...defaultTheme.fontFamily.serif]    
      }
    },
  },
  plugins: [],
  darkMode: 'selector'
}

