/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
  ],
  theme: {
    extend: {
        colors:{
            blufs: {
                500: "#004999",
            }
        },
        strokeWidth: {
            '1.5': '1.5px'
        }
    },
  },
  plugins: [],
}
