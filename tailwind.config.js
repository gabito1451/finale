/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1280px",
      },
      height: {
        "calc-navbar": "calc(100vh - 84px)",
      },

      // Adding custom utilities for masking
      maskImage: {
        "radial-blur": "radial-gradient(circle, white 60%, transparent 100%)",
      },
    },
  },
  plugins: [],
};
