/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A2540',                       // headings
        ice: { 50: '#F4F9FF', 100: '#E6F2FF', 200: '#CFE5FB', 300: '#A9D0F5' },  // light blues
        azure: { 400: '#5AA9F0', 500: '#2B8AE6', 600: '#1670CF', 700: '#0F5BB0', 800: '#0B4486', 900: '#082F5E' },
        brand: { DEFAULT: '#E07018', deep: '#A94B08' }, // logo orange, used sparingly
      },
      fontFamily: {
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        heading: ['"Barlow Condensed"', 'Barlow', 'system-ui', 'sans-serif'],
      },
      maxWidth: { page: '76rem' },
    },
  },
  plugins: [],
};
