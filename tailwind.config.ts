import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: "#20372F",
        accent: "#3A8577",
        light: "#EBF5F3",
        cream: "#F9F9F7",
        white: "#FFFFFF",
        alertRed: "#E04F5F",
        alertOrange: "#F59E0B",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        head: ["var(--font-head)"],
      },
      borderRadius: {
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
