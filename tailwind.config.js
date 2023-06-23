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
      fontSize: {
        dynamic: "9.5vw",
        dynamic2: "7vw",
      },
      colors: {
        "tinted-black": "rgb(27, 34, 46)",
        "neon-blue": "#0BF9EA",
        "dark-grey-blue": "#1F2833",
        "light-neon-blue": "#66FCF1",
      },
    },
  },
  plugins: [],
};
