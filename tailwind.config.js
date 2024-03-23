/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'red' : '#DA7A5A',
      'blue' : '#62929e',
      'green' : '#538A2E',
      'gray' : '#546a7b',
      'dark-gray' : '#656565',
      'light-black' : '#B2B2B2',
      'white' : '#fdfdff',
      'silver' : '#C6C5B9',
      'lightsilver' : '#FAFAF9',
      'darksilver' : '#9c9a8e',
      'brown' : '#544741',
      'black' : '#000000', 
      'yellow' : '#FFFFCC'
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
      },
      backgroundImage:{
        'radial-gradient': 'radial-gradient(circle, #62929e, #fdfdff)'
      }
    },
  },
  plugins: [],
}

