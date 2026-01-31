/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a1cfea",      // Azul claro do logo
        secondary: "#ae98e2",    // Roxo/lilás do logo
        primarySoft: "#e8f4fb",  // Azul muito claro para backgrounds
        secondarySoft: "#f0ebf9", // Roxo muito claro para backgrounds
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #a1cfea 0%, #ae98e2 100%)',
        'gradient-soft': 'linear-gradient(135deg, #e8f4fb 0%, #f0ebf9 100%)',
      },
    },
  },
  plugins: [],
};