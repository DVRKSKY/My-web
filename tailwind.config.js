/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#CF77F5",
        secondary: "#EAEAEA",
        tertiary: "#8A8A8A",
        backgroundDark: "#1C0433",
        backgroundLight: "#FDF8FF",
      },
      fontFamily: ['"Sofia Sans"', "sans-serif"],
      textShadow: {
        outline:
          "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      },
    },
  },
  plugins: [],
};
