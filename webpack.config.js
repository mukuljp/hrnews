const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    client: './src/client.js',
    bundle: './src/bundle.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
 },
 watch:false
}
