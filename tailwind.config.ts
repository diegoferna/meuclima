import type { Config } from "tailwindcss";

export default {
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
        sunrise: "#ceeff5",
        sunset: "#e7f7fa",
        storm: "#4A4E69",
        twilight: "#3D348B",
        midnight: "#1D1E2C",
      },
    },
  },
  plugins: [],
} satisfies Config;
