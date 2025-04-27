/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'roboto': 'Roboto, sans-serif',
      'glory': 'Glory, sans-serif',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'greenNormal': '#00CF5F',
      'blackCaption': '#929292',
      'blueDark': '#143160',
      'blueLight': '#16195E',
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}