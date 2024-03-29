/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Borna", ...defaultTheme.fontFamily.sans],
        hand: ["'Gochi Hand'", "cursive", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "black": "#000000",
        "black-900": "#090909",
        "neon": "#E5FF03",
        "snow": "#CBCAD1"
      }
    }
  },
  plugins: [require("tailwind-heropatterns")({})]
};
