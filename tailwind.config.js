/** @type {import('tailwindcss').Config} */
import form from '@tailwindcss/forms'

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      'primary': '#026e00',
      'onPrimary': '#ffffff',
      'secondary': '#2d6b1c',
      'onSecondary': '#ffffff',
      'tertiary': '#9c404b',
      'onTertiary': '#ffffff',
      'error': '#ba1a1a',
      'onError': '#ffffff',
      'background': '#fcfdf6',
      'onBackground': '#1a1c18',
      'surface': '#fffbff',
      'onSurface': '#1a1c18',
      'onSurface-Variant': '#dfe4d7',
      'Surface-Variant': '#43483f',
      'outline': '#73796e',
      container: {
        'primary': '#77ff61',
        'onPrimary': '#002200',
        'secondary': '#aff593',
        'onSecondary': '#032100',
        'tertiary': '#ffdadb',
        'onTertiary': '#40000e',
        'error': '#ffdad6',
        'onError': '#410002'
      }
    },
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