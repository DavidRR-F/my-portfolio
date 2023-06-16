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
            2: "#B0DAFF",
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
        primary: {
          dark: {
            100: "#535561",
            200: "#282a3a",
            300: "#181923",
          },
          light: {
            100: "#f6f6f7",
            200: "#e5e5e8",
            300: "#d4d4d8",
          },
        },
        secondary: {
          dark: {
            100: "#ddc192",
            200: "#C69749",
            300: "#735F32",
          },
          light: {
            100: "#b6c0fe",
            200: "#8696fe",
            300: "#363c66",
          },
        },
      },
    },
  },
  plugins: [],
};
