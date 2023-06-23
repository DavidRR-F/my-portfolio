/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { max: "600px" },
      tablet: { max: "1000px" },
    },
    extend: {
      rotate: {
        left: "-5deg", // Adjust the degree of rotation as needed
      },
      fontSize: {
        dynamic: "9.5vw",
        dynamic2: "7vw",
      },
      colors: {
        primary: {
          100: "#FFDAAB",
          200: "#FF836D",
        },
        secondary: {
          100: "#FF9F22",
          200: "#FF351A",
        },
        forground: {
          100: "rgb(209 213 219",
          200: "rgb(156 163 175)",
        },
        background: {
          100: "rgb(12, 21, 29)",
          200: "rgb(27, 34, 46)",
        },
        "tinted-black": "rgb(27, 34, 46)",
        "neon-blue": "#0BF9EA",
        "dark-grey-blue": "#1F2833",
        "light-neon-blue": "#66FCF1",
      },
    },
    variants: {
      extend: {
        rotate: ["hover"], // Enable the 'hover' variant for the rotate utility
      },
    },
  },
  plugins: [],
};
