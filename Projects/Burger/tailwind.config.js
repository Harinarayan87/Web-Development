/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#ffcc02',
        secondary: '#010d78',
        bg: '#010a5e',
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
      oswald: ['Oswald','sans-serif'],
      dmsans: ['DM Sans','sans-serif'],
    },

  },
  plugins: [],
}

