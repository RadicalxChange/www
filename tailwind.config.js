module.exports = {
  purge: [],
  theme: {
    screens: {
      md: { raw: "(min-width: 640px)" },
      lg: { raw: "(min-width: 768px)" },
      "base-landscape": {
        raw: "(max-width: 767px) and (orientation: landscape)",
      },
      "lg-tall": { raw: "(min-width: 768px) and (max-aspect-ratio: 2/1)" },
      touch: { raw: "(hover: none)" },
    },
    fontSize: {
      "size--2": "var(--step-type--2)",
      "size--1": "var(--step-type--1)",
      "size-0": "var(--step-type-0)",
      "size-1": "var(--step-type-1)",
      "size-2": "var(--step-type-2)",
      "size-3": "var(--step-type-3)",
      "size-4": "var(--step-type-4)",
      "size-5": "var(--step-type-5)",
    },
    fontFamily: {
      display: ["Messer", "san-serif"],
      button: ["SuisseIntl-Book", "sans-serif"],
      body: ["SuisseIntl", "sans-serif"],
    },
    colors: {
      "golden-fizz": "#EEFD4E",
      red: "#C53030",
      black: "#000000",
      white: "#FFFFFF",
      gray: "#535252",
      transparent: "transparent",
    },
    extend: {
      borderRadius: { "50": "50%" },
      borderWidth: { "3": "3px" },
      transitionProperty: { right: "right" },
      inset: { full: "100%" },
      minHeight: { tall: "50vw" },
      maxHeight: { tall: "50vw", "75vh": "75vh" },
      maxWidth: { "75vw": "75vw" },
      lineHeight: { display: "0.9" },
    },
  },
  variants: {},
  plugins: [],
};
