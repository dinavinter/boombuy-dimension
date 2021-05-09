
const env = require('./env-config.js')

module.exports = {
  presets: ['next/babel'],
  plugins: [['transform-define', env],

    [
      "wrap-in-js",
      {
        "extensions": ["css$", "scss$"]
      }
    ]],
}