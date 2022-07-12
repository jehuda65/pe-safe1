/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: theme => ({
      'carry': "url('/img/bg-3.png')",
      'chess': "url('/img/chess.jpeg')",
      'hardware':"url('/img/hardware.jpg')",
      'software':"url('/img/software2.jpg')",
      'process':"url('/img/processes.jpg')",
      'training':"url('/img/training.jpeg')",
  }),
  
  plugins: [],
}
}}