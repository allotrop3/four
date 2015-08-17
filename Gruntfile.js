module.exports = function(grunt)
{
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      config: {
         root: './src',
         source: './src/**/*.js',
         cache: './.tmp/scripts/four.js',
         concatenated: './dist/four.js',
         minified: './dist/four.min.js'
      },
      browserify: {
         options: {
            banner: '/* Four <%= pkg.version %> | Jason Petersen (@allotrop3) | MIT Licensed */'
         },
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
            banner: '/* Four <%= pkg.version %> | Jason Petersen (@allotrop3) | MIT Licensed */',
            sourceMap: true
         },
         dist: {
            files: {
               '<%= config.minified %>': '<%= config.concatenated %>'
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
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', ['browserify:dist', 'babel:dist']);
   grunt.registerTask('build', ['browserify:dist', 'babel:dist', 'uglify:dist']);
};