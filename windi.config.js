const typography = require("windicss/plugin/typography");

module.exports = {
  extract: {
    include: [
      'src/components/*.tsx'
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [
    typography({
      modifiers: ["DEFAULT", "sm", "lg", "red"],
    }),
  ],
};
