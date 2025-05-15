/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors : {
          "primary-200" : "#ffbf00",
          "primary-100" : "#ffc929",
          "secondary-200" : "#00b050",
          "secondary-100" : "#0b1a78"
        },
        animation: {
          'scroll': 'scroll 20s linear infinite', // Define the scrolling animation
        },
        keyframes: {
          scroll: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
      },
    },
    plugins: [],
  }
  