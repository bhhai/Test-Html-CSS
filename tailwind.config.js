/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    extend: {
      colors: {
        'kid-toys': "#1A1114",
        'toy-kid': '#EC80A0',
        'toy-kid-2': '#E76088',
      },
      boxShadow: {
        'header-shadow': '0px 2px 20px 0px rgba(26, 17, 20, 0.10)',
        'card-shadow': '0px 4px 30px 0px rgba(10, 30, 35, 0.10)' 
      }
    },
    fontFamily: {
      'poppins': ['Poppins'],
      'sansita': ['Sansita']
   }
  },
  plugins: [],
}
