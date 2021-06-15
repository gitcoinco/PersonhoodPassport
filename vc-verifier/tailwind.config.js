module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.svelte',
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'monserrat': ['Montserrat'],
      },
    },
    variants: {
      extend: {
        opacity: ['disabled'],
        cursor: ['disabled'],
      }
    },
  },
  plugins: [],
};
