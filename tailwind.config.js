/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
       shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
         },
         wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        shooting: {
          '0%': { transform: 'translateX(-10%) translateY(-10%)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateX(120vw) translateY(120vh)', opacity: '0' },
        },
        gradientShift: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
       },
       animation: {
         shine: 'shine 5s linear infinite',
         wave: 'wave 2s infinite',
         'shooting-star': 'shooting 1.5s ease-out forwards',
          gradient: "gradientShift 5s ease infinite",
       },
       fontFamily:{
        roboto:['Roboto','sans-serif']
       },
       backgroundSize: {
        "gradient-size": "200% 200%",
      },
    },
  },
  plugins: [],
}