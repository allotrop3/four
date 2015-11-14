'use strict';

var gulp = require('gulp');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var config = require('./webpack.config.js');
var spritesmith = require('gulp.spritesmith');

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
 * gulp sprite
 *
 * Generate sprite and css file from PNGs
 */
gulp.task('sprite', function () {
   var sprite = gulp.src('./docs/resources/styles/images/icons/*.png')
      .pipe(spritesmith({
         imgName: 'sprite.png',
         imgPath: 'images/sprite.png',
         cssName: 'sprite.css',
         cssOpts: {
            cssClass: function (item) {
               return '.icon-' + item.name;
            }
         },
         cssTemplate: 'sprite.handlebars',
         cssHandlebarsHelpers: {
            half: function (options) {
               var halved = Math.ceil(parseFloat(options.fn(this)) * 0.5);

               return halved + 'px';
            }
         },
         padding: 20
      }));

   sprite.img.pipe(gulp.dest('./docs/resources/styles/images/'));
   sprite.css.pipe(gulp.dest('./docs/resources/styles/'));
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