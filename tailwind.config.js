/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      'boss': ['Raleway', ...defaultTheme.fontFamily.sans],
      'bitter': ['Bitter', ...defaultTheme.fontFamily.serif],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
