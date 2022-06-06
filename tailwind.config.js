const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        padding: '15px',
        center: true,
      },

      colors: {
        'primary-sm': colors.pink[300],
        primary: colors.pink[500],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
