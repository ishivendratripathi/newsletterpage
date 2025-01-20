/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        specialblue:"bg-gradient-to-r from-sky-200 to-sky-100",
      }
    },
  },
  plugins: [],
}

