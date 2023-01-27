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
            blue_main: {
                500: "#0251A8",
            }
        }
    },
  },
  plugins: [],
}
