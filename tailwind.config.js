const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [],
  theme: {
    screens: {
      md: { raw: "(min-width: 640px)" },
      lg: { raw: "(min-width: 768px)" },
      xl: { raw: "(min-width: 1024px)" },
      "base-landscape": {
        raw: "(max-width: 767px) and (orientation: landscape)",
      },
      "lg-tall": { raw: "(min-width: 768px) and (max-aspect-ratio: 2/1)" },
      touch: { raw: "(hover: none)" },
    },
    fontSize: {
      "size--3": ["var(--step-type--3)", "1.5"],
      "size--2": ["var(--step-type--2)", "1.5"],
      "size--1": ["var(--step-type--1)", "1.5"],
      "size-0": ["var(--step-type-0)", "1.5"],
      "size-1": ["var(--step-type-1)", "1.5"],
      "size-2": ["var(--step-type-2)", "1.5"],
      "size-3": ["var(--step-type-3)", "1.5"],
      "size-4": ["var(--step-type-4)", "1.5"],
      "size-5": ["var(--step-type-5)", "1.5"],
      "size-6": ["var(--step-type-6)", "1.5"],
      "size-7": ["var(--step-type-7)", "1.5"],
      "size-8": ["var(--step-type-8)", "1.5"],
      "size-display": ["25.2vw", "0.9"],
      "size-lg/display": ["6.38vw", "0.9"],
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
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              color: theme('colors.black'),
              maxWidth: 'none',
              '[class~="lead"]': {
                color: theme('colors.black'),
              },
              a: {
                color: theme('colors.black'),
              },
              strong: {
                color: theme('colors.black'),
              },
              'ol > li::before': {
                color: theme('colors.black'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.black'),
              },
              hr: {
                borderColor: theme('colors.black'),
              },
              blockquote: {
                color: theme('colors.black'),
                borderLeftColor: theme('colors.black'),
              },
              h1: {
                color: theme('colors.black'),
              },
              h2: {
                color: theme('colors.black'),
              },
              h3: {
                color: theme('colors.black'),
              },
              h4: {
                color: theme('colors.black'),
              },
              'figure figcaption': {
                color: theme('colors.black'),
              },
              code: {
                color: theme('colors.black'),
              },
             
              'a code': {
                color: theme('colors.black'),
              },
              pre: {
                color: theme('colors.black'),
                backgroundColor: theme('colors.white')
              },
              thead: {
                color: theme('colors.black'),
                borderBottomColor: theme('colors.black'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.black'),
              },
              fontSize: theme("fontSize.size-0[0]"),
              lineHeight: theme("fontSize.size-0[1]"),
              p: {
                marginTop: theme("spacing.5"),
                marginBottom: theme("spacing.5"),
              },
              '[class~="lead"]': {
                fontSize: theme("fontSize.size-1[0]"),
                lineHeight: theme("fontSize.size-1[1]"),
                marginTop: theme("spacing.6"),
                marginBottom: theme("spacing.6"),
              },
              blockquote: {
                marginTop: theme("spacing.6"),
                marginBottom: theme("spacing.6"),
                paddingLeft: theme("spacing.4"),
              },
              h1: {
                fontSize: theme("fontSize.size-4[0]"),
                marginBottom: theme("spacing.4"),
                lineHeight: theme("fontSize.size-4[1]"),
              },
              h2: {
                fontSize: theme("fontSize.size-3[0]"),
                marginTop: theme("spacing.8"),
                marginBottom: theme("spacing.4"),
                lineHeight: theme("fontSize.size-3[1]"),
              },
              h3: {
                fontSize: theme("fontSize.size-2[0]"),
                marginTop: theme("spacing.6"),
                marginBottom: theme("spacing.2"),
                lineHeight: theme("fontSize.size-2[1]"),
              },
              h4: {
                marginTop: theme("spacing.6"),
                marginBottom: theme("spacing.2"),
              },
              img: {
                marginTop: theme("spacing.4"),
                marginBottom: theme("spacing.4"),
              },
              video: {
                marginTop: theme("spacing.4"),
                marginBottom: theme("spacing.4"),
              },
              figure: {
                marginTop: theme("spacing.4"),
                marginBottom: theme("spacing.4"),
              },
              'figure figcaption': {
                fontSize: theme("fontSize.size--1[0]"),
                lineHeight: theme("fontSize.size--1[1]"),
                marginTop: theme("spacing.3"),
              },
              code: {
                fontSize: "inherit",
              },
              'h2 code': {
                fontSize: "inherit",
              },
              'h3 code': {
                fontSize: "inherit",
              },
              pre: {
                fontSize: theme("fontSize.size--1[0]"),
                lineHeight: theme("fontSize.size--1[1]"),
                marginTop: theme("spacing.7"),
                marginBottom: theme("spacing.7"),
              },
              ol: {
                marginTop: theme("spacing.5"),
                marginBottom: theme("spacing.5"),
              },
              ul: {
                marginTop: theme("spacing.5"),
                marginBottom: theme("spacing.5"),
              },
              li: {
                marginTop: theme("spacing.2"),
                marginBottom: theme("spacing.2"),
              },
              '> ul > li p': {
                marginTop: theme("spacing.3"),
                marginBottom: theme("spacing.3"),
              },
              '> ul > li > *:first-child': {
                marginTop: theme("spacing.5"),
              },
              '> ul > li > *:last-child': {
                marginBottom: theme("spacing.5"),
              },
              '> ol > li > *:first-child': {
                marginTop: theme("spacing.5"),
              },
              '> ol > li > *:last-child': {
                marginBottom: theme("spacing.5"),
              },
              'ul ul, ul ol, ol ul, ol ol': {
                marginTop: theme("spacing.3"),
                marginBottom: theme("spacing.3"),
              },
              hr: {
                marginTop: theme("spacing.12"),
                marginBottom: theme("spacing.12"),
              },
              table: {
                fontSize: theme("fontSize.size--1[0]"),
                lineHeight: theme("fontSize.size--1[1]"),
              },
            },
          ],
        },
      }),
      borderRadius: { 50: "50%", oval: "70px" },
      borderWidth: { 3: "3px" },
      transitionProperty: { right: "right", "margin-left": "margin-left" },
      inset: { full: "100%", "1/4": "25%", "1/2": "50%" },
      minHeight: { tall: "50vw" },
      maxHeight: { tall: "50vw", "75vh": "75vh" },
      maxWidth: { "75vw": "75vw" },
      lineHeight: { display: "0.9" },
      boxShadow: {
        "focus-white": "0 0 0 3px rgba(256, 256, 256, 1)",
      },
      height: { 36: "9rem" },
      gridColumn: {
        "span-margins": "1 / -1",
        "span-columns": "column 1 / margin 2",
        "span-16": "span 16 / span 16",
      },
      gridColumnStart: {
        "margin-1": "margin 1",
        "column-1": "column 1",
        "gutter-1": "gutter 1",
        "column-2": "column 2",
        "gutter-2": "gutter 2",
        "column-3": "column 3",
        "gutter-3": "gutter 3",
        "column-4": "column 4",
        "gutter-4": "gutter 4",
        "column-5": "column 5",
        "gutter-5": "gutter 5",
        "column-6": "column 6",
        "gutter-6": "gutter 6",
        "column-7": "column 7",
        "gutter-7": "gutter 7",
        "column-8": "column 8",
        "gutter-8": "gutter 8",
        "column-9": "column 9",
        "gutter-9": "gutter 9",
        "column-10": "column 10",
        "gutter-10": "gutter 10",
        "column-11": "column 11",
        "gutter-11": "gutter 11",
        "column-12": "column 12",
        "gutter-12": "gutter 12",
        "column-13": "column 13",
        "gutter-13": "gutter 13",
        "column-14": "column 14",
        "gutter-14": "gutter 14",
        "column-15": "column 15",
        "gutter-15": "gutter 15",
        "column-16": "column 16",
        "margin-2": "margin 2",
      },
      gridColumnEnd: {
        "margin-1": "margin 1",
        "column-1": "column 1",
        "gutter-1": "gutter 1",
        "column-2": "column 2",
        "gutter-2": "gutter 2",
        "column-3": "column 3",
        "gutter-3": "gutter 3",
        "column-4": "column 4",
        "gutter-4": "gutter 4",
        "column-5": "column 5",
        "gutter-5": "gutter 5",
        "column-6": "column 6",
        "gutter-6": "gutter 6",
        "column-7": "column 7",
        "gutter-7": "gutter 7",
        "column-8": "column 8",
        "gutter-8": "gutter 8",
        "column-9": "column 9",
        "gutter-9": "gutter 9",
        "column-10": "column 10",
        "gutter-10": "gutter 10",
        "column-11": "column 11",
        "gutter-11": "gutter 11",
        "column-12": "column 12",
        "gutter-12": "gutter 12",
        "column-13": "column 13",
        "gutter-13": "gutter 13",
        "column-14": "column 14",
        "gutter-14": "gutter 14",
        "column-15": "column 15",
        "gutter-15": "gutter 15",
        "column-16": "column 16",
        "margin-2": "margin 2",
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
        "layout-4":
          "[margin] 1rem [column] 1fr repeat(3, [gutter] 2rem [column] 1fr) [margin] 1rem",
        "layout-12":
          "[margin] 2rem [column] 1fr repeat(11, [gutter] 2rem [column] 1fr) [margin] 2rem",
        "layout-16":
          "[margin] 2rem [column] 1fr repeat(15, [gutter] 2rem [column] 1fr) [margin] 2rem",
      },
      gridTemplateRows: {
        "auto/1fr": "auto minmax(0, 1fr)",
        "auto/auto/1fr/auto": "auto auto minmax(0, 1fr) auto",
        kiosk: "repeat(4, min-content)",
      },
    },
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus"],
    extend: {
      display: ["open"],
      visibility: ["group-hover"],
      margin: ["open"],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant, e }) {
      addVariant("open", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.open .${e(`open${separator}${className}`)}`;
        });
      });
    }),
  ],
};
