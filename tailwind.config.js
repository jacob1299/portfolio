module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./src/public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      grayscale: ["hover"],
    },
  },
  plugins: [],
};
