var path = require('path');

module.exports = {
   context: path.join(__dirname, 'src'),
   entry: './four.js',
   output: {
      filename: path.join(__dirname, 'dist', 'four.min.js')
   },
   module: {
      loaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
         }
      ]
   }
};