/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#252525",
        "light-text": "#e8e8e8",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
