/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      poppins: ["Poppins", "sans-serif"]
    },
    colors:{
      primary: {
        purple: 'hsl(259, 100%, 65%)',
        lightRed: 'hsl(0, 100%, 67%)'

      },
      neutral:{
        white:'hsl(0, 0%, 100%)',
        offWhite:'hsl(0, 0%, 94%)',
        lightGrey: 'hsl(0, 0%, 86%)',
        smokeGrey: 'hsl(0, 1%, 44%)',
        offBlack: 'hsl(0, 0%, 8%)'
      }
    }
  },
  plugins: [],
}

