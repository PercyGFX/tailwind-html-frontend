/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"], // Add Ubuntu font
      },
    },
  },
  plugins: [],
};
