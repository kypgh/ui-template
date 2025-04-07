import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#5C7AEA", // Main brand color (blue-ish)
          light: "#A0B4FF", // Light brand color
          dark: "#3B4DBF", // Darker brand shade
          muted: "#E7EBFF", // Muted background color
        },
        gray: {
          light: "#F7F7F7", // Light gray for backgrounds
          DEFAULT: "#D1D5DB", // Default gray for borders, text
          dark: "#4B5563", // Dark gray for headings, text
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Default sans-serif font
      },
      spacing: {
        18: "4.5rem", // Custom spacing if needed
      },
      borderRadius: {
        "4xl": "2rem", // Large border radius for buttons or cards
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
