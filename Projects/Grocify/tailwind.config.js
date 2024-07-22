/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#008e43',
        secondary: '#102b7b',
        bg: '#111111',
      },
      keyframes:{
        move: {
          '50%': { transform: 'translateY(-1rem)' },
        },
        zoom:{
          '50%': { transform: 'scale(1.1)' },
        }
      }
    },
    screens:{
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },
    container:{
      center: true,
      padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '0rem',
    },
  },
    fontFamily:{
      grostek:['Space Grotesk', 'sans-serif'],
    },

  },
  plugins: [],
}

