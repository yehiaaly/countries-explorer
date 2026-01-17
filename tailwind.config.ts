import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // This tells Tailwind to use the .dark class strategy
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
