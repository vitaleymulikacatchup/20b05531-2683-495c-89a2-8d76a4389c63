/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: '#e50914',
          black: '#000000',
          dark: '#141414',
          gray: {
            100: '#f3f3f3',
            200: '#e5e5e5',
            300: '#999999',
            400: '#737373',
            500: '#564d4d',
            600: '#333333',
            700: '#222222',
            800: '#181818',
            900: '#0f0f0f'
          }
        }
      },
      fontFamily: {
        'netflix': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      },
      backgroundImage: {
        'netflix-bg': 'linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.75))'
      }
    },
  },
  plugins: [],
}