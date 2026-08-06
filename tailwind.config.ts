import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bleu foncé — couleur principale (confiance, sérieux)
        navy: {
          50: "#eef2f7",
          100: "#d6e0ec",
          200: "#adc1d9",
          300: "#7d9dc0",
          400: "#4d78a6",
          500: "#2f5c8a",
          600: "#1f4468",
          700: "#173453",
          800: "#0f2a43", // couleur principale
          900: "#0a1e30",
        },
        // Turquoise — accent pour boutons et éléments importants
        teal: {
          50: "#eefbfa",
          100: "#d3f4f0",
          200: "#a6e8e1",
          300: "#70d6cc",
          400: "#3cbeb2",
          500: "#1fa398", // accent principal
          600: "#17827a",
          700: "#146762",
          800: "#12524f",
          900: "#0f4441",
        },
        ink: "#152238",
        mist: "#f4f6f9", // gris clair pour sections
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      borderRadius: {
        card: "10px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 42, 67, 0.06), 0 8px 24px rgba(15, 42, 67, 0.06)",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
