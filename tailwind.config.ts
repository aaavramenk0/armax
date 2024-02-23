const { nextui } = require("@nextui-org/react");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',

    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px"
      },
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.6)',
        'heading': 'rgb(17, 24, 39)',
        'subheading': 'rgb(55, 65, 81)'
      },
      typography: {
        'small-caps': { 'font-variant-caps': 'small-caps' }
      },
      screens: {
        'xxs': '200px',
        'xs': '320px',
        'xl': '1100px'
      },
      animation: {
        marquee: 'marquee 70s linear infinite',
        marquee2: 'marquee2 70s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}