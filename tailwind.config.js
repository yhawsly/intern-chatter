/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["ExtraBold Italics"],
      inter: ["Regular"],
    },
    extend: {
      colors: {
        blue: ["#104579"],
        yellow: ["#fobco2"],
      },
    },
  },
  plugins: [],
};
