import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#581c87",
        "accent-light": "#7c3aed",
      },
      boxShadow: {
        purple: "0 0 10px #581c87, 0 0 20px #581c87, 0 0 40px #581c87",
        "accent-glow": "0 0 30px rgba(88, 28, 135, 0.4)",
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
