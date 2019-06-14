const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/four.js'),
  output: {
    library: 'four',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'four.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
