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
    gridTemplateColumns: {
      "4":
        "[margin] 1rem [column] 1fr repeat(3, [gutter] 2rem [column] 1fr) [margin] 1rem",
      "12":
        " [margin] 2rem [column] 1fr repeat(11, [gutter] 2rem [column] 1fr) [margin] 2rem",
      "16":
        "[margin] 2rem [column] 1fr repeat(15, [gutter] 2rem [column] 1fr) [margin] 2rem",
    },
    fontSize: {
      "size--3": "var(--step-type--3)",
      "size--2": "var(--step-type--2)",
      "size--1": "var(--step-type--1)",
      "size-0": "var(--step-type-0)",
      "size-1": "var(--step-type-1)",
      "size-2": "var(--step-type-2)",
      "size-3": "var(--step-type-3)",
      "size-4": "var(--step-type-4)",
      "size-5": "var(--step-type-5)",
      "size-6": "var(--step-type-6)",
      "size-7": "var(--step-type-7)",
      "size-8": "var(--step-type-8)",
      "size-display": "16.88vw",
      "size-lg/display": "6.38vw",
    },
    fontFamily: {
      display: ["Messer", "san-serif"],
      button: ["SuisseIntl-Book", "sans-serif"],
      body: ["SuisseIntl", "sans-serif"],
    },
    colors: {
      "golden-fizz": "#EDFF38",
      red: "#C53030",
      black: "#000000",
      "light-black": "#010101",
      white: "#FFFFFF",
      gray: "#6C6C6C",
      transparent: "transparent",
    },
    extend: {
      borderRadius: { "50": "50%", oval: "70px" },
      borderWidth: { "3": "3px" },
      transitionProperty: { right: "right", "margin-left": "margin-left" },
      inset: { full: "100%", "1/4": "25%", "1/2": "50%" },
      minHeight: { tall: "50vw" },
      maxHeight: { tall: "50vw", "75vh": "75vh" },
      maxWidth: { "75vw": "75vw" },
      lineHeight: { display: "0.9" },
      boxShadow: {
        "focus-white": "0 0 0 3px rgba(256, 256, 256, 1)",
      },
      height: { "36": "9rem" },
    },
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
