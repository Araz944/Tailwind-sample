module.exports = {
  purge: ["./dist/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      // write "npm run build:css" each time in the terminal when using or modifying these resolutions (when finish the work, write "npm run prod" in the terminal to make minimized css file)
      xs320: "320px",
      xs360: "360px",
      xs400: "400px",
      xs460: "460px",
      xs520: "520px",
      xs580: "580px",
      sm640: "640px",
      md760: "760px",
      md840: "840px",
      md930: "930px",
      lg1020: "1020px",

      xl: "1280px",
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    borderWidth: {
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      16: "16px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
