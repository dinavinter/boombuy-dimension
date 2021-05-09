const env = {
  'process.env.BACKEND_URL': process.env.NODE_ENV === 'production' ? '/boombuy-dimension' : '',
}

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
    ],
    ['transform-define', env]
  ]
}


