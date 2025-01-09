import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        purple: "0 0 10px #581c87, 0 0 20px #581c87, 0 0 40px #581c87",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
