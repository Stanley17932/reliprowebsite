/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "burgundy-light": "#c72c48",
      },
    },
  },
  plugins: [],
  darkMode: "class", // Enable dark mode via class
};
