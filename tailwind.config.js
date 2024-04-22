import { adaptPath } from "rasengan";

/** @type {import('tailwindcss').Config} */
export default {
  content: adaptPath(["./src/**/*.{js,jsx}"]),
  theme: {
    extend: {
      colors: {
        primary: "#1e1b18",
        gray:"#d4dcdd",
      },
      fontFamily: {
        ojuju: ['Ojuju', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
};
