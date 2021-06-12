module.exports = {
  purge: ["./dist/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      // write "npm run build:css" each time in the terminal when using or modifying these resolutions
      xs320: "320px",
      xs360: "360px",
      xs400: "400px",
      xs460: "460px",
      xs520: "520px",
      xs580: "580px",
      sm640: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
