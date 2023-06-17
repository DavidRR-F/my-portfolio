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
        light: {
          bg: "#F6F1F1",
          primary: {
            1: "#C9EEFF",
            2: "#9ac5f4",
            3: "#6DA9E4",
          },
        },
        dark: {
          bg: "#2B2B28",
          primary: {
            1: "#595260",
            2: "#B2B1B9",
            3: "#EEEEEE",
          },
        },
      },
    },
  },
  plugins: [],
};
