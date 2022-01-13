module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monument: ["MonumentExtended", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
