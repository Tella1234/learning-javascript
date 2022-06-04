module.exports = {
  content: ["./pages/**/*.{html,js}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'karla': ['Karla', 'sans-serif'],
    },
  },
  plugins: [
    require('tw-elements/dist/plugin.js')
  ],
}