'use strict';

var gulp = require('gulp');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var config = require('./webpack.config.js');
var webserver = require('gulp-webserver');
var ext = require('gulp-ext-replace');
var rimraf = require('gulp-rimraf');
var sequence = require('run-sequence');
var pygmentize = require('pygmentize-bundled');
var markdown = require('gulp-markdown');
var marked = markdown.marked;
var renderer = new marked.Renderer();
var rendering = require('./renderer.config.js');
var prettify = require('gulp-prettify');

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
 * gulp md
 *
 * Compile markdown wiki to html.
 */
gulp.task('md', function()
{
   marked.setOptions({
      highlight: function(code, lang, cb)
      {
         return pygmentize(
            {
               lang: lang,
               format: 'html'
            },
            code,
            function(error, result)
            {
               cb(error, result.toString());
            }
         )
      }
   });

   for (var tag in rendering)
   {
      if (tag in renderer)
      {
         renderer[tag] = rendering[tag];
      }
   }

   gulp.src('projects/four.wiki/**/*.md')
      .pipe(markdown(
         {
            renderer: renderer
         }
      ))
      .pipe(gulp.dest('.api'))
      .pipe(prettify(
         {
            indent_size: 4
         }
      ))
      .pipe(gulp.dest('.api'))
      .pipe(ext('.php'))
      .pipe(gulp.dest('projects/fourjs.io/api'));
});

/**
 * gulp rimraf
 *
 * Remove .docs folder.
 */
gulp.task('rimraf', function(cb)
{
   return gulp.src(['.api', 'projects/fourjs.io/api/_*.*'],
      {
         read: false
      })
      .pipe(rimraf());
});

/**
 * gulp docs
 *
 * Compile the documentation.
 */
gulp.task('api', function(cb)
{
   sequence('md', 'rimraf', cb);
});

/**
 * gulp build
 *
 * Minify ES5 script
 */
gulp.task('build', ['js'], function()
{
   return gulp.src('src/four.js')
      .pipe(webpackStream(config.build, webpack))
      .pipe(gulp.dest('dist'));
});

/**
 * gulp serve
 *
 * Setup local web server
 */
gulp.task('serve', function()
{
   return gulp.src('./')
      .pipe(webserver({
         port: 8003,
         livereload: false,
         directoryListing: true,
         open: true
      }));
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
