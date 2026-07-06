/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050318",
        secondary: "#0B0725",
        surface: "#12102A",
        accent: {
          primary: "#3B3BFF",
          light: "#5A5CFF",
          subtle: "rgba(90, 92, 255, 0.14)",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#B5B7D8",
          muted: "#8588B3",
        },
        border: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
