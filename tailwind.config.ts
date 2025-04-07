import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#5C7AEA",
          light: "#A0B4FF",
          dark: "#3B4DBF",
          muted: "#E7EBFF",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
