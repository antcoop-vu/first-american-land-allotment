/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        cream: "#FBF5DD",
        sage: "#A6CDC6",
        teal: "#16404D",
        gold: "#DDA853",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#16404D",
          foreground: "#FBF5DD",
        },
        secondary: {
          DEFAULT: "#A6CDC6",
          foreground: "#16404D",
        },
        muted: {
          DEFAULT: "#FBF5DD",
          foreground: "#16404D",
        },
        accent: {
          DEFAULT: "#DDA853",
          foreground: "#16404D",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
