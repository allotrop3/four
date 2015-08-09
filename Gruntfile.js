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
      "jsbeautifier" : {
         dist: {
            src: ["<%= config.concatenated %>"]
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

   grunt.loadNpmTasks('grunt-browserify');
   grunt.loadNpmTasks('grunt-babel');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks("grunt-jsbeautifier");
   grunt.loadNpmTasks('grunt-jsdoc');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', ['browserify:dist', 'babel:dist']);
   grunt.registerTask('docs', ['browserify:dist', 'babel:dist', 'jsbeautifier:dist', 'jsdoc:dist']);
   grunt.registerTask('build', ['browserify:dist', 'babel:dist', 'uglify:dist', 'jsdoc:dist']);
};