/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['SuisseIntl', 'system-ui'],
      'serif': ['SuisseWorks', 'ui-serif'],
      'mono': ['SuisseIntlMono', 'SFMono-Regular'],
      'display': ['SuisseWorks'],
      'body': ['SuisseIntl'],
    },
    extend: {},
  },
  plugins: [],
}