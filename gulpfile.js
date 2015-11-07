'use strict';

var gulp = require('gulp');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var config = require('./webpack.config.js');

/**
 * gulp js
 *
 * Compile ES6 CommonJS modules into one ES5 script with webpack and babel.
 */
gulp.task('js', function()
{
   return gulp.src('src/four.js')
      .pipe(webpackStream(config.js, webpack))
      .pipe(gulp.dest('dist'));
});

/**
 * gulp build
 *
 * Minify ES5 script
 */
gulp.task('build', function()
{
   return gulp.src('src/four.js')
      .pipe(webpackStream(config.build, webpack))
      .pipe(gulp.dest('dist'));
});

/**
 * gulp watch
 *
 * Run babelify tasks and watch for subsequent changes.
 */
gulp.task('watch', function()
{
   return gulp.watch('src/**/*js', ['js']);
});

/**
 * gulp (default task)
 *
 * Alias for gulp watch.
 */
gulp.task('default', ['watch']);