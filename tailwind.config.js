/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#13487d',
        'blue': '#022a52',
        'dark-slate': '#373d45',
        'tan': '#ece1c8',
        'dark-tan': '#ecb782',
      },
    },
  },
  plugins: []
};
