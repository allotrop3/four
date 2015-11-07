var path = require('path');
var webpack = require('webpack');
var uglify = new webpack.optimize.UglifyJsPlugin();

var env = {
    js: {
       context: path.join(__dirname, 'src'),
       entry: './four.js',
       output: {
          path: path.join(__dirname, 'dist'),
          filename: 'four.js'
       },
       module: {
          loaders: [
             { test: /\.js$/, loader: 'babel', query: { presets: ['es2015'] } }
          ]
       },
       resolve: ['', '.js']
    },
    build: {
       context: path.join(__dirname, 'src'),
       entry: './four.js',
       output: {
          path: path.join(__dirname, 'dist'),
          filename: 'four.min.js'
       },
       plugins: [uglify],
       module: {
          loaders: [
             { test: /\.js$/, loader: 'babel', query: { presets: ['es2015'], cacheDirectory: true } }
          ]
       },
       resolve: ['', '.js']
    }
};

module.exports = env;