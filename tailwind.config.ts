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
        // Primary - Deep Forest Green
        primary: {
          DEFAULT: "#20372F",
          dark: "#1a2d26",
          light: "#2d4a3f",
        },
        // Accent - Teal
        accent: {
          DEFAULT: "#3A8577",
          dark: "#2f6d62",
          light: "#4a9a8a",
        },
        // Legacy support
        deep: "#20372F",
        light: "#EBF5F3",
        cream: "#F9F9F7",
        surface: "#FFFFFF",
        // Status
        alertRed: "#E04F5F",
        alertOrange: "#F59E0B",
        alertGreen: "#10B981",
        alertBlue: "#3B82F6",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        head: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "card": "20px",
        "card-lg": "28px",
        "3xl": "1.75rem",
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 4px 20px -1px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 8px 30px -5px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.02)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
