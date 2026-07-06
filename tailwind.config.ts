import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "Inter", "sans-serif"],
      },
      colors: {
        ink: "#050318",
        midnight: "#0B0725",
        panel: "#12102A",
        electric: "#3B3BFF",
        periwinkle: "#5A5CFF",
        mist: "#B5B7D8",
      },
      boxShadow: {
        glow: "0 0 70px rgba(59, 59, 255, 0.36)",
        button: "0 0 36px rgba(90, 92, 255, 0.52)",
      },
      backgroundImage: {
        luxury:
          "radial-gradient(circle at 50% 0%, rgba(90,92,255,.34), transparent 34%), linear-gradient(135deg, #050318 0%, #0B0725 54%, #17126E 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
