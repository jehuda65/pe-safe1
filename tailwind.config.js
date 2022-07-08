/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: theme => ({
      'carry': "url('/img/bg-3.png')",
      'chess': "url('/img/chess.jpeg')",
  }),
  
  plugins: [],
}
}}