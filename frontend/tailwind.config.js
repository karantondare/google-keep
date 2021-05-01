module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "logo-font": ['"PT Sans"', "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
