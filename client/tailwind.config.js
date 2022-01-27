module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '2048px',
        '4xl': '2880px',
        '5xl': '3840px',
        '6xl': '5120px',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      noto: ['Noto Sans', 'sans-serif'],
    },
    colors: {
      black: '#000',
      white: '#fff',
      red: '#f62937',
      smoke: '#f5f5f5',
    },
  },
  plugins: [],
};
