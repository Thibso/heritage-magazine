import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headerBlue: "#171e38",
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
    },
  },
  plugins: [],
};
export default config;
