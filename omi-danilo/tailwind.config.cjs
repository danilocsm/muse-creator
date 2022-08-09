/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "app-background": "url('public/appImageBackground.png')",
      },
    },
  },
  plugins: [],
};
