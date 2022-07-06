/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: theme => ({
      'blue-white': "url('/img/background.png')",
      'chess': "url('/img/chess.jpeg')",
  }),
  
  plugins: [],
}
}}