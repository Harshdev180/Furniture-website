/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark-walnut": "#3E2723",
        "warm-beige": "#E6D5C3",
        "gold": "#C9A24D",
        "soft-cream": "#FAF7F2",
        "charcoal": "#2B2B2B",
        "stone-gray": "#78716c",
      },
      fontFamily: {
        display: ["Spline Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },
      boxShadow: {
        glow: "0 4px 20px rgba(201, 162, 77, 0.25)",
        subtle: "0 1px 2px rgba(62, 39, 35, 0.05)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
