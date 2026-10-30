/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { colors: { chronus: { cream: '#f5e9dc', sand: '#d8b99b', caramel: '#b77b51', brown: '#4a2c1e', paper: '#fcf8f3' } }, fontFamily: { serif: ['Playfair Display', 'serif'], sans: ['DM Sans', 'sans-serif'] } } },
  plugins: [],
}
