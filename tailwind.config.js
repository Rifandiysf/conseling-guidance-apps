/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        plusjakarta: ['Plus Jakarta Sans'] 
      },
      colors: {
        primary: '#3195F7',
        secondry: '#9FFF24',
        tertiary: '#7ED5B3',
        body: '#ffffff',
        container: '#F0F4F9',
        text: '#292D32'
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateX(-25%)' },
          '50%': { transform: 'translateX(0)' },
        }
      },
      screens: {
        phone: '360px',
        tablet: '600px',
        laptop: '1025px',
        dektop: '1280px'
      }
    },
  },
  plugins: [],
}

