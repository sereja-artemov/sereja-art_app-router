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
    extend: {
      colors: {
        darkPrimary: '#21252b',
        darkSecondary: '#333841',
        whitePrimary: '#f6f8fc',
        whiteSecondary: '#fff',
        borderColor: '#efefef',
        blockBorderColorDark: '#464646',
        blockBorderColorLight: '#efefef',
        secondTextColor: '#828282',
        accentBg: '#6767ab29',
      },
      maxWidth: {
        textContainer: '680px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.darkPrimary'),

            // ...
          },
        },
      }),
    },
    fontFamily: {
      sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      boss: ['Raleway', ...defaultTheme.fontFamily.sans],
      playfair: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
