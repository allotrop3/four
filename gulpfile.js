'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');

/**
 * gulp js (--dev)
 *
 * Compile CommonJS modules into a minified script with webpack.
 */
gulp.task('js', function()
{
   return gulp.src('src/four.js')
      .pipe(webpack(require('./webpack.config.js')))
      .pipe(gulp.dest('dist'));
});

/**
 * gulp watch
 *
 * Run build tasks and watch for subsequent changes.
 */
gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['js']);
});

/**
 * gulp (default task)
 *
 * Alias for gulp watch.
 */
gulp.task('default', ['watch']);