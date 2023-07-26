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
    },
  },
  plugins: [],
};
