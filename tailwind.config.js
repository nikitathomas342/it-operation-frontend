/** from https://tailwindcss.com/docs/font-size */
const defaultFontSizes = {
  "2xs": ["0.7rem", "1rem"],
  xs: ["0.75rem", "1rem"],
  sm: ["0.875rem", "1.25rem"],
  md: ["1rem", "1.5rem"], // md is same as base
  base: ["1rem", "1.5rem"],
  lg: ["1.125rem", "1.75rem"],
  xl: ["1.25rem", "1.75rem"],
  "2xl": ["1.5rem", "2rem"],
  "3xl": ["1.875rem", "2.25rem"],
  "4xl": ["2.25rem", "2.5rem"],
  "5xl": ["3rem", "1"],
  "6xl": ["3.75rem", "1"],
  "7xl": ["4.5rem", "1"],
  "8xl": ["6rem", "1"],
  "9xl": ["8rem", "1"],
  "10xl": ["10rem", "1"],
};

const fontSize = Object.keys(defaultFontSizes).reduce((result, current) => {
  const value = defaultFontSizes[current];
  return {
    ...result,
    [current]: [
      `var(--font-size-${current}, ${value[0]})`,
      `var(--line-height-${current}, ${value[1]})`,
    ],
  };
}, {});

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  safelist: [
    {
      pattern: /^btn-.*/,
    },
    {
      pattern: /^text-.*/,
    },
    "underline",
  ],
  theme: {
    extend: {
      screens: {
        landscape: { raw: "(orientation: landscape)" },
        xs: { max: "425px" },
        fold: { max: "280px" },
        tall: { raw: "(max-width: 540px) and (min-height: 768px)" },
      },
      fontSize,
    },
  },
  plugins: [
    require("daisyui"),
    require("@rvxlab/tailwind-plugin-ios-full-height"),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
  daisyui: {
    themes: [
      {
        agentmate: {
          primary: "#AE0736",
          "primary-focus": "#d53b66",
          "primary-content": "#ffffff",

          secondary: "#DB0026",
          "secondary-focus": "#d92c4a",
          "secondary-content": "#ffffff",

          accent: "#9467DE",
          "accent-focus": "#C9B2EE",
          "accent-content": "#ffffff",

          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",

          info: "#2094f3",
          success: "#199759",
          warning: "#ff9900",
          error: "#f22510",
        },
      },
      "light",
    ],
  },
};
