module.exports = function(grunt)
{
   grunt.initConfig({
      config: {
         source: {
            root: './src/scripts',
            source: './src/scripts/**/*.js',
            cache: './.tmp/scripts/four.js',
            concatenated: './public/scripts/four.js',
            minified: './public/scripts/four.min.js',
            docs: './public/docs'
         },
         test: {
            root: './test',
            source: './test/**/*.js',
            cache: './.tmp/scripts/test.js',
            concatenated: './public/scripts/test.js'
         }
      },
      jshint: {
         options: {
            jshintrc: '.jshintrc',
         },
         files: ['<%= config.source.source %>']
      },
      browserify: {
         dist: {
            files: {
               '<%= config.source.cache %>': '<%= config.source.source %>'
            }
         },
         test: {
            files: {
               '<%= config.test.cache %>': '<%= config.test.source %>'
            }
         }
      },
      babel: {
         options: {
            sourceMap: true
         },
         dist: {
            files: {
               '<%= config.source.concatenated %>': '<%= config.source.cache %>'
            }
         },
         test: {
            files: {
               '<%= config.test.concatenated %>': '<%= config.test.cache %>'
            }
         }
      },
      uglify:
      {
         options: {
            sourceMap: true
         },
         dist: {
            files: {
               '<%= config.source.minified %>': '<%= config.source.concatenated %>'
            }
         }
      },
      jsdoc: {
         dist: {
            src: '<%= config.source.concatenated %>',
            options: {
               destination: '<%= config.source.docs %>',
               ignoreWarnings: true
            }
         }
      },
      watch: {
         source: {
            files: ['<%= config.source.source %>'],
            tasks: ['default']
         },
         test: {
            files: ['<%= config.test.source %>'],
            tasks: ['test']
         }
      }
   });

   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-browserify');
   grunt.loadNpmTasks('grunt-babel');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-jsdoc');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', ['browserify:dist', 'babel:dist', 'uglify', 'jsdoc']);
   grunt.registerTask('test', ['browserify:test', 'babel:test']);
};