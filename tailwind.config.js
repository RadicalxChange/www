module.exports = {
  purge: [],
  theme: {
    extend: {
      screens: {
        tall: { raw: "(min-height: 50vw)" },
        touch: { raw: "(hover: none)" },
      },
      colors: {
        "golden-fizz": { 100: "#EEFD4E" },
      },
      borderRadius: {
        "50": "50%",
      },
      lineHeight: {
        clamped: "0.825",
      },
      spacing: {
        xs: "0.25vw",
        sm: "0.5vw",
        default: "1vw",
        lg: "2vw",
        xl: "3vw",
        "3xl": "5vw",
        "4xl": "6vw",
        zdefault: "4.5vmin",
        zlg: "6.75vmin",
        zxl: "9vmin",
        span1: "8.333vw",
        span2: "16.666vw",
        span3: "25vw",
        span4: "33.333vw",
      },
      transitionProperty: { right: "right" },
      inset: { full: "100%" },
      minHeight: { tall: "50vw" },
      maxHeight: { "3/4": "75%" },
      borderWidth: {
        "3": "3px",
      },
    },
    fontSize: {
      xs: "0.6vw",
      sm: "0.8vw",
      default: "1vw",
      lg: "1.2vw",
      xl: "1.4vw",
      "5xl": "6vw",
      "6xl": "8vw",
      "7xl": "10vw",
      zlg: "4vmin",
      zxl: "4.5vmin",
      z2xl: "9vmin",
      z3xl: "13.5vmin",
    },
    fontFamily: {
      display: ["Messer", "san-serif"],
      body: ["SuisseIntl", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
};
