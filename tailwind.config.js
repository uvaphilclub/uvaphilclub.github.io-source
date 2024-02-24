/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue' : '#62929e',
      'gray' : '#546a7b',
      'white' : '#fdfdff',
      'silver' : '#C6C5B9',
      'lightsilver' : '#FAFAF9',
      'darksilver' : '#9c9a8e',
    },
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)'}, 
        'tallscrren': { 'raw': '(min-aspect-ratio: 13/20)'},
      },
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
        },
        'rotateAnimation' : {
          '0%' : { transform: 'rotate(0deg)' },
          '100%' : { transform: 'rotate(360deg)' },
        }
      }, 
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'rotateAnimation' : 'rotateAnimation 2s infinite'
      }
    },
  },
  plugins: [],
}

