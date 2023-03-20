/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#c9ada7',
        secondary: '#f8f8f8',
      },
    },
  },
  plugins: [],
};
