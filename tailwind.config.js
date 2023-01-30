/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: "'Josefin Sans', bold, regular",
      },
      colors: {
        primary: {
          BrightBlue: "hsl(220, 98%, 61%)",
        },
        checkGradient: {
          100: "hsl(192, 100%, 67%)",
          200: "hsl(280, 87%, 65%)",
        },
        DarkTheme: {
          DarkBlue: "hsl(235, 21%, 11%)",
          DarkDesaturatedBlue: "hsl(235, 24%, 19%)",
          LightGrayishBlue: "hsl(234, 39%, 85%)",
          HoverLightGrayishBlue: "hsl(236, 33%, 92%)",
          DarkGrayishBlue1: "hsl(234, 11%, 52%)",
          DarkGrayishBlue2: "hsl(233, 14%, 35%)",
          DarkGrayishBlue4: "hsl(237, 14%, 26%)",
        },
        LightTheme: {
          LightGray: "hsl(0, 0%, 98%)",
          LightGrayishBlue1: "hsl(236, 33%, 92%)",
          LightGrayishBlue2: "hsl(233, 11%, 84%)",
          DarkGrayishBlue0: "hsl(236, 9%, 61%)",
          DarkGrayishBlue3: "hsl(235, 19%, 35%)",
        },
      },
    },
  },
  plugins: [],
};
