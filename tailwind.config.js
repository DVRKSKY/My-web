/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'

  ],
  theme: {
    extend: {
      colors: {
        primary: '#58F7F7',
        secondary: '#EAEAEA',
        tertiary: '#8A8A8A',
      },
      fontFamily: ['"Sofia Sans"', 'sans-serif'],
      textShadow: {
        'outline': '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
      },
    },
  },
  plugins: [],
}