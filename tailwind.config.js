/** @type {import('tailwindcss').Config} */
import form from '@tailwindcss/forms'

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 1.5s linear infinite',
      }
    },
  },
  plugins: [
    form
  ],
}