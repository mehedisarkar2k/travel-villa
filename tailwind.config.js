module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlue: "#0791BE",
        lightBlue: "#01b7f2",
        orange: "#F56960",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
