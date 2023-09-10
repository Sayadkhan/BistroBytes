import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "",
        lg: "",
        xl: "",
        "2xl": "",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "0",
        },
      },

      colors: {
        dark: "#202124",
        light: "#F4F4F4",
        gray: "#6C6C6C",
        red: "#FF3F4A",
        blue: "#00AED6",
        green: "#00B79F",
        orange: "#FE7A15",
        yellow: "#FFD000",
      },
    },
  },
  plugins: [],
};
export default config;
