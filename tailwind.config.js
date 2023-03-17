/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["{./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm: '486px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {},
  },
  plugins: [],
}
