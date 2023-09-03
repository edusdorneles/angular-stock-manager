/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0284c7",
        hover: {
          primary: "#0369a1"
        }
      }
    }
  },
  plugins: [],
}
