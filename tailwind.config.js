module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        "golden-fizz": { 100: "#EEFD4E" },
      },
      borderRadius: {
        "50": "50%",
      },
      lineHeight: {
        clamped: "0.825",
      },
    },
    fontSize: {
      xs: "0.6vw",
      sm: "0.8vw",
      default: "1vw",
      lg: "1.2vw",
      xl: "1.4vw",
      "4point5xl": "5vw",
      "5xl": "6vw",
      "6xl": "8vw",
      "7xl": "10vw",
    },
    fontFamily: {
      display: ["Messer", "san-serif"],
      body: ["SuisseIntl", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
};
