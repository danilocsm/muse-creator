/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "app-background": "url('assets/appImageBackground.png')",
      },
    },
  },
  plugins: [],
};
