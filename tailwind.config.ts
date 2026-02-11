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
        background: "var(--background)",
        foreground: "var(--foreground)",
        neon: {
          cyan: "#34f5ff",
          blue: "#4b6bff",
          violet: "#a855f7",
          pink: "#ec4899",
        },
        glass: "rgba(10, 15, 30, 0.55)",
      },
      boxShadow: {
        glow: "0 0 25px rgba(52, 245, 255, 0.25)",
        "glow-strong": "0 0 45px rgba(168, 85, 247, 0.35)",
      },
      backgroundImage: {
        "radial-neon": "radial-gradient(circle at top, rgba(52, 245, 255, 0.22), transparent 55%)",
        "mesh-neon": "radial-gradient(circle at 20% 20%, rgba(236, 72, 153, 0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(52, 245, 255, 0.18), transparent 45%), radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.2), transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
