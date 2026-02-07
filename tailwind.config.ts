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
        primary: "#1A1A1A",
        secondary: "#FFFFFF",
        neutral: {
          100: "#F7F5F2",
          200: "#E0DEDA",
          400: "#6B6B6B",
          700: "#3A3A3A",
          800: "#1F1F1F",
          900: "#0F0F0F",
        },
        accent: "#FF3B30",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-eb-garamond)", "Georgia", "serif"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "1.4" }],
        sm: ["14px", { lineHeight: "1.5" }],
        base: ["18px", { lineHeight: "1.6" }],
        lg: ["20px", { lineHeight: "1.3" }],
        xl: ["24px", { lineHeight: "1.2" }],
        "2xl": ["32px", { lineHeight: "1.2" }],
        "3xl": ["40px", { lineHeight: "1.1" }],
        "4xl": ["48px", { lineHeight: "1.1" }],
        "5xl": ["72px", { lineHeight: "1.05" }],
      },
      spacing: {
        "18": "72px",
        "20": "80px",
        "30": "120px",
      },
    },
  },
  plugins: [],
};
export default config;
