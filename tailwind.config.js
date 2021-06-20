const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    options: {
      safelist: [/bg-(gray|red|yellow|green|blue|indigo|purple|pink)-[3-7]00/]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Source code pro', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'near-black': '#000000',
        'near-white': '#FFFFFF',
        'near-gray': '#F2F2F2',
        'near-red': '#FF585D',
        'near-orange': '#FFB259',
        'near-yellow': '#F0EC74',
        'near-green': '#00C08B',
        'near-blue': '#00C1DE',
        'near-royal': '#0072CE',
        'blue-gray': colors.blueGray,
        'light-blue': colors.lightBlue,
        teal: colors.teal,
        rose: colors.rose
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
};