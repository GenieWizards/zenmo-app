/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      // Create a custom color that uses a CSS custom value
      primary: "#19F3BB",
      secondary: "#5764F6",
    },
    extend: {},
  },
  plugins: [],
};
