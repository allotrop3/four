module.exports = function(grunt)
{
   grunt.initConfig({
      config: {
         root: './src/scripts',
         source: './src/scripts/**/*.js',
         cache: './.tmp/scripts/four.js',
         concatenated: './public/scripts/four.js',
         minified: './public/scripts/four.min.js',
         docs: './public/docs'
      },
      jshint: {
         options: {
            jshintrc: '.jshintrc',
         },
         files: ['<%= config.source %>']
      },
      browserify: {
         dist: {
            files: {
               '<%= config.cache %>': '<%= config.source %>'
            }
         }
      },
      babel: {
         options: {
            sourceMap: true
         },
         dist: {
            files: {
               '<%= config.concatenated %>': '<%= config.cache %>'
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
               '<%= config.minified %>': '<%= config.concatenated %>'
            }
         }
      },
      jsdoc: {
         dist: {
            src: '<%= config.concatenated %>',
            options: {
               destination: '<%= config.docs %>',
               ignoreWarnings: true
            }
         }
      },
      watch: {
         source: {
            files: ['<%= config.source %>'],
            tasks: ['default']
         }
      }
   });

   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-browserify');
   grunt.loadNpmTasks('grunt-babel');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-jsdoc');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', ['browserify:dist', 'babel:dist', 'uglify:dist', 'jsdoc:dist']);
};