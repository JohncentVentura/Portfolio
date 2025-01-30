/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fgClr: "var(--fgClr)",
        bgClr: "var(--bgClr)",
        mainClr: "var(--mainClr)",
      },
      fontFamily: {
        mainFont: "var(--mainFont)"
      }
    },
  },
  plugins: [],
};
