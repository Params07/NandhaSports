/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#74E291'
      },
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        guerrilla: ['"Protest Guerrilla"', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
