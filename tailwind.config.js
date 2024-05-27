/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  variants: {
    width: ['focus', 'active', 'group-focus', 'group-active'],
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/Images/bg 1.jpg')",
        'contact-bg': "url('/Images/city1.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(20rem, 1fr))',
        'solid': 'repeat(auto-fit, minmax(10rem, 1fr))',
      } 
    },
    screens: {
      'mobile': '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}