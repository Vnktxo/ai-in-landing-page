/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { // <-- The '1' was removed from this line
    // ... theme extensions
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-pattern.svg')",
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
      // Add custom color for "most valuable"
      colors: {
        "most-valuable": "#FFD700", // gold
        "matrix-green": "#00FFA3",
      },
    },
  },
  // Add the required plugin
  plugins: [
    require("tailwindcss-animate")
  ],
};

export default config;