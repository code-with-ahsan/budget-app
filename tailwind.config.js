module.exports = {
  content: ["./src/**/*.{html,ts}"],
  jit: true,
  purge: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "light-grey": "#E5EEE5",
        "midning-purple": "#CAD0E3",
        purple: "#7652C6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
