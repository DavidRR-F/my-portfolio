/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mobile: "600px",
    },
    extend: {
      colors: {
        "tinted-black": "#0B0C10",
        "neon-blue": "#0BF9EA",
        "dark-grey-blue": "#1F2833",
        "light-neon-blue": "#66FCF1",
      },
    },
  },
  plugins: [],
};
