/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          //#383940
          //#373943
          //#828282
          100: '#828282',
          200: '#343741',
          400: '#272A34',
          600: '#25272E'
        },
        green: {
          600: '#38F2AF',
        },
        white: {
          100: '#FFF'
        }
      },
    },
  },
  plugins: [],
}