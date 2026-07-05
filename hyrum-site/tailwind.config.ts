import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F8FA",
        ink: "#14213D",
        body: "#3B4351",
        accent: "#2456A6",
        accentSoft: "#E8EFFA",
        line: "#E4E7EC",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
