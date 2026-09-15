import type { Config } from "tailwindcss";

// ---------------------------------------------------------------------------
// DESIGN TOKENS
// Deep navy + Bridgepoint electric blue (#004AAD, sampled from the official
// logo), on white / off-white / charcoal. Change values here to adjust the
// look of the entire site.
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
        navy: "#0B1E3D",
        navyDeep: "#060F21",
        electric: "#004AAD",
        electricLight: "#2F6FED",
        white: "#FFFFFF",
        offwhite: "#F6F7FA",
        lightgray: "#E4E7EC",
        charcoal: "#1C2230",
        steel: "#5B6472",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1360px",
      },
      letterSpacing: {
        label: "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;
