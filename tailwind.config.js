/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headerBlue: "rgb(25, 32,64)",
        mainBlue: "#181E39",
        white: "#FFFFFF",
        bgLight: "#fafafa",
        orange: "#ED731B",
        noir: "#000000",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sfPro: ["var(--font-sfPro)"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 11s linear infinite",
        "infinite-scroll-1": "infinite-scroll 35s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-1": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
