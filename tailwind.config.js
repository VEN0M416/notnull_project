/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        headerLinks: '#d5d9df',
        hoverBg: '#a9aeb429',
        activeBg: '#a1a5aa62',
      },
      padding:{

      }
    },
  },
  plugins: [],
}

