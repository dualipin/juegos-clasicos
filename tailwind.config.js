/** @type {import('tailwindcss').Config} */
import form from '@tailwindcss/forms'

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    form
  ],
}