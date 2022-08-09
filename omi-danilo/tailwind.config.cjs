/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "app-background": "url('./src/assets/appImageBackground.png')",
      },
    },
  },
  plugins: [],
};
