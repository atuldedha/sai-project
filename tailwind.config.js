/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1400px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        bgColor1: "#e9effb",
        bgColor2: "#F5F5F5",
        blue1: "#172E51",
        blue2: "#1F2833",
        blue3: "#152E51",
        blue4: "#1B2336",
        blue5: "#3D8FFF",
        blue6: "#2A2947",
        blue7: "#2169D0",
        blue8: "#121C34",
        blue9: "#28243A",
        blue10: "#2F5EDD",
        blue11: "#0A142F",
        black1: "#040404",
        gray1: "#333333",
        gray2: "#4D5569",
        gray3: "#8987A1",
      },
      backgroundColor: {
        grayBg: "rgba(15, 78, 168, 0.06)",
      },
      boxShadow: {
        shadow1: "-11.8769px 35.6308px 59.3846px rgba(31, 29, 85, 0.05)",
        shadow2: "0px 22px 54px rgba(0, 0, 0, 0.04);",
        shadow3: "14px 41px 100px rgba(41, 74, 177, 0.26)",
        shadow4: "0px 16.0438px 32.0877px rgba(0, 59, 129, 0.080899)",
      },
      gridTemplateColumns: {
        5: "1fr 1fr 1fr 1fr 1fr",
      },
      backgroundImage: {
        background1: "linear-gradient(0deg, #E6EFFD 0%, #FFFFFF 74.16%)",
      },
      borderRadius: {
        ratingCardRounded: "112.711px 27.0507px 27.0507px 27.0507px",
        curveRadius: "100% 3%",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
