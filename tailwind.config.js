/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: ["Plus Jakarta Sans"]
      },
      colors: {
        primary: '#3195F7',
        secondry: '#9FFF24',
        tertiary: '#7ED5B3',
        body: '#ffffff',
        container: '#F0F4F9',
        text: '#292D32'
      }
    },
  },
  plugins: [],
}

