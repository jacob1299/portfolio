module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/public/index.html",
    "./src/components/*.tsx",
  ],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    extend: {
      grayscale: ["hover"],
    },
  },
  plugins: [],
};
