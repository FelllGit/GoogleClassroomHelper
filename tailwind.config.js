/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'background': {
        'back': '#8e90be',
        'front': '#9EA1D4',
      },
      'buttons':{
        'decline': "#FFD4D4",
        'accept': "#d8dea2",
        'normal': "#A8D1D1",
      },
      'text': '#353535',
    },
  },
  plugins: [],
}
