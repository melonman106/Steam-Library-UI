
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        steam: {
          dark: '#1b2838',
          blue: '#1a9fff',
          'light-blue': '#66c0f4',
          bg: '#171a21',
          green: '#75b022',
          sidebar: '#212429',
          input: '#121a24',
          nav: '#3d4450',
        },
      },
    },
  },
  plugins: [],
};
