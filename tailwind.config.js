/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/**/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/**/**/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
