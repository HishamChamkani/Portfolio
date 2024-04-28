/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        MyDark: '#124C81',
        DarkBlue: '#0C3153',
        MyGreen: '#1B9C85',
        MySalat: '#E2E8F0',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Montserrat': ['Montserrat','sans'],
        'Inter': ['Inter','sans'],
      },
    },
  },
  plugins: [],
}

