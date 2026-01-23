/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      /* =======================
         KEYFRAMES
      ======================= */
      keyframes: {
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeInScaleUp: {
          "0%": { transform: "scale(0.1)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },

        /* 🔥 SPLASH SCREEN */
        splash: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "40%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "80%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "scale(1.05)",
          },
        },
      },

      /* =======================
         ANIMATIONS
      ======================= */
      animation: {
        slideIn: "slideInFromLeft 1s forwards",
        slideInDelayed: "slideInFromLeft 1s 0.5s forwards",
        fadeInScale: "fadeInScaleUp 2s forwards",
        slideInLeft: "slideInFromLeft 2s forwards",
        slideInRight: "slideInFromRight 2s forwards",

        /* 🔥 SPLASH SCREEN */
        splash: "splash 2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
