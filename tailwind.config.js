/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // ... theme extensions
    extend: {
      keyframes: {
        "star-movement-top": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(100%)" },
        },
        "star-movement-bottom": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "star-movement-top": "star-movement-top 6s linear infinite",
        "star-movement-bottom": "star-movement-bottom 6s linear infinite",
      },
      // Add custom color for "most valuable"
      colors: {
        "most-valuable": "#FFD700", // gold
      },
    },
  },
  // Remove direct require("tw-animate-css") from here to avoid hard crash when not installed
  plugins: [],
};

export default config;