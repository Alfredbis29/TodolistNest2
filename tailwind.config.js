/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./views/**/*.hbs",
    "./src/**/*.{ts,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} 