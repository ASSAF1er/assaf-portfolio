import { adaptPath } from "rasengan";

/** @type {import('tailwindcss').Config} */
export default {
  content: adaptPath(["./src/**/*.{js,jsx}"]),
  theme: {
    extend: {
      colors: {
        primary: "#1e1b18",
        gray: "#d4dcdd",
        "gray-400": "#374151",
        "gray-100": "#f3f4f6",
        danger: "#ef4444",
      },
      fontFamily: {
        ojuju: ["Ojuju", "sans-serif"],
      },
    },
  },
  plugins: [],
};
