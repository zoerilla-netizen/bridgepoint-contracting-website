/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bridgepoint palette — black / charcoal / dark gray / white / very light gray.
        // No bright or accent colors by design: contrast is the accent.
        ink: "#0E0E0F",
        charcoal: "#1B1B1D",
        graphite: "#3A3A3C",
        steel: "#6E6E73",
        mist: "#F4F4F5",
        hairline: "#2A2A2C",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
