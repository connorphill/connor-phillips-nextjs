/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      padding: '4rem',
    },
    extend: {
      colors: {
        midnight: {
          100: '#E6E8EB',
          200: '#BFC6CE',
          300: '#99A4B1',
          400: '#4D6076',
          500: '#001C3B',
          600: '#001935',
          700: '#001123',
          800: '#000D1B',
          900: '#000812',
        },
        aqua: {
          50: '#F3F7F7',
          100: '#E7EFF0',
          200: '#C2D6D8',
          300: '#9EBEC1',
          400: '#558D93',
          500: '#0C5C64',
          600: '#0B535A',
          700: '#07373C',
          800: '#05292D',
          900: '#041C1E',
        },
        gold: {
          50: '#FEFCF5',
          100: '#FDF8EB',
          200: '#FBEFCC',
          300: '#F9E5AD',
          400: '#F4D170',
          500: '#EFBD33',
          600: '#D7AA2E',
          700: '#8F711F',
          800: '#6C5517',
          900: '#48390F',
        },
        forest: {
          50: '#F7F9F7',
          100: '#EFF3EF',
          200: '#D7E1D7',
          300: '#BFCFBE',
          400: '#90AA8E',
          500: '#60865D',
          600: '#567954',
          700: '#3A5038',
          800: '#2B3C2A',
          900: '#1D281C',
        },
        sun: {
          50: '#FEFDF5',
          100: '#FDFAEB',
          200: '#FAF3CC',
          300: '#F7ECAD',
          400: '#F0DD70',
          500: '#EACF33',
          600: '#D3BA2E',
          700: '#8C7C1F',
          800: '#695D17',
          900: '#463E0F',
        },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(0.8)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-mobile-menu': 'open-menu 0.5s forwards',
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#e7c91d',
              '&:hover': {
                color: '#695d17',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
