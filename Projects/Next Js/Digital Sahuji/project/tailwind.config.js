/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#f69226',
        secondary: '#4570b6',
        bg: '#FAFAFC',
      },
    },

    fontFamily:{
      opensans: ['Open Sans','sans-serif'],
    },

    screens:{
      sm: "480px",
      md: "768px",
      lg: "1280px",
    },

    container:{
      center: true,
      padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '0rem',
    },
  },

  },
  plugins: [],
};
