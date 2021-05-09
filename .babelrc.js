const env = require('./env.config')

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      "module-resolver", {
      "root": ["."],
      "alias": {
        "styles": "./styles"
      },
      "cwd": "babelrc"
    }],
    [
      "wrap-in-js",
      {
        "extensions": ["css$", "scss$"]
      }
    ]
    ,
    ['transform-define', env]
  ]
}


