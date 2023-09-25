/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      phone: { max: "375px" },
      mobile: { max: "600px" },
      fold: { max: "700px" },
      tablet: { max: "1000px" },
    },
    extend: {
      keyframes: {
        "slide-right": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        "slide-left": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "slide-right": "15s slide-right infinite linear",
        "slide-left": "15s slide-left infinite linear",
      },
      rotate: {
        left: "-5deg",
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
          100: "rgb(209 213 219)",
          200: "rgb(156 163 175)",
          300: "rgb(105, 110, 119)",
        },
        background: {
          100: "rgb(27, 34, 46)",
          200: "rgb(12, 21, 29)",
          300: "rgb(65, 76, 95)",
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
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".animate-paused > *": {
          "animation-play-state": "paused",
        },
      });
    },
  ],
};
