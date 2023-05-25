/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        blue1: "#172E51",
        blue2: "#1F2833",
        blue3: "#152E51",
      },
      // backgroundImage: {
      //   navButtonBackground:
      //     "linear-gradient(90deg, rgba(79, 172, 254, 0.6) 0%, rgba(0, 242, 254, 0.6) 100%), #2898FF;",
      // },
    },
  },
  plugins: [],
};
