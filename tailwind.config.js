/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/hero-pattern.svg')", // This is from your new Hero.tsx
      },
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
      colors: {
        "most-valuable": "#FFD700", // gold
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // 👈 This was missing
  ],
};

export default config;