/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      primaryLimeGreen: "hsl(163, 72%, 41%)",
      primaryBrightRed: "hsl(356, 69%, 56%)",
      primaryFacebook: "hsl(208, 92%, 53%)",
      primaryTwitter: "hsl(203, 89%, 53%)",
      primaryInstagramFrom: "hsl(37, 97%, 70%)",
      primaryInstagramTO: "hsl(329, 70%, 58%)",
      primaryYoutube: "hsl(348, 97%, 39%)",
      toggleFrom: "hsl(210, 78%, 56%)",
      toggleTo: "hsl(146, 68%, 55%)",
      toggle: "hsl(230, 22%, 74%)",
      DarkVeryDarkBlue: "hsl(230, 17%, 14%)",
      DarkVeryDarkBlueTop: "hsl(232, 19%, 15%)",
      DarkDarkDesaturatedBlue: "hsl(228, 28%, 20%)",
      DarkDesaturatedBlue: "hsl(228, 34%, 66%)",
      LightVeryPaleBlue: "hsl(225, 100%, 98%)",
      LightLightGrayishBlue: "hsl(227, 47%, 96%)",
      LightDarkGrayishBlue: "hsl(228, 12%, 44%)",
      LightVeryDarkBlue: "hsl(230, 17%, 14%)",
      HoverBgDark: "#333A56",
      HoverBgLight: "#E1E3F0",
    },
    extend: {
      keyframes: {
        bgColor: {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
      },
      animation: {
        bgColor: "bgColor 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
