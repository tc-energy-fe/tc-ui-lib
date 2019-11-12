module.exports = {
  root: true,
  env: {
    "browser": true,
    "node": true,
    "es6": true
  },
  extends: [
    "plugin:vue/recommended"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    "parser": "babel-eslint",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  plugins: [
    "vue"
  ],
  rules: {
  }
}
