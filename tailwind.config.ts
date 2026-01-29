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
        primary: {
          DEFAULT: "#1E3A5F",
          light: "#2B4F7F",
        },
        secondary: {
          DEFAULT: "#D4AF37",
          light: "#E5C158",
        },
        accent: "#4ECDC4",
        background: {
          DEFAULT: "#FFFFFF",
          alt: "#F8F9FA",
        },
        "text-primary": "#1A1A1A",
        "text-secondary": "#6B7280",
        success: "#10B981",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Montserrat", "sans-serif"],
        body: ["var(--font-body)", "Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
