module.exports = function(grunt)
{
   grunt.initConfig({
      config: {
         src: {
            root: './src/scripts',
            source: './src/scripts/**/*.js',
            cache: './.tmp/scripts/four.js'
         },
         dist: {
            root: './dist/scripts',
            concatenated: './dist/scripts/four.js',
            minified: './dist/scripts/four.min.js'
         },
         docs: './docs'
      },
      jshint: {
         options: {
            jshintrc: '.jshintrc',
         },
         files: ['<%= config.src.source %>']
      },
      browserify: {
         dist: {
            files: {
               '<%= config.src.cache %>': '<%= config.src.source %>'
            }
         }
      },
      babel: {
         options: {
            sourceMap: true
         },
         dist: {
            files: {
               '<%= config.dist.concatenated %>': '<%= config.src.cache %>'
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
               '<%= config.dist.minified %>': '<%= config.dist.concatenated %>'
            }
         }
      },
      jsdoc: {
         dist: {
            src: '<%= config.dist.concatenated %>',
            options: {
               destination: '<%= config.docs %>',
               ignoreWarnings: true
            }
         }
      },
      watch: {
         files: ['<%= jshint.files %>'],
         tasks: ['default']
      }
   });

   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-browserify');
   grunt.loadNpmTasks('grunt-babel');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-jsdoc');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', ['browserify', 'babel', 'uglify', 'jsdoc']);
};