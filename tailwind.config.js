/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], 
      },
      animation: {
        louder: "louder 0.5s ease-in-out",
      },
      keyframes: {
        louder: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(0.95)" },
          "75%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
