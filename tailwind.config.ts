import type { Config } from "tailwindcss";

// ---------------------------------------------------------------------------
// DESIGN TOKENS — the single source of truth for color and type.
// Change values here to adjust the look of the entire site.
// ---------------------------------------------------------------------------
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/config/**/*.{ts,tsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        charcoal: "#17181A",
        graphite: "#3F4144",
        steel: "#8A8C90",
        mist: "#F1F0EE",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-instrument)", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1320px",
      },
      letterSpacing: {
        label: "0.12em",
      },
    },
  },
  plugins: [],
};

export default config;
