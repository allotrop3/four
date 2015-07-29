module.exports = function(grunt)
{
   grunt.initConfig({
      config: {
         src: {
            root: './src/scripts',
            source: './src/scripts/**/*.js',
            cache: './.tmp/scripts/four.js'
         },
         public: {
            root: './public/scripts',
            concatenated: './public/scripts/four.js',
            minified: './public/scripts/four.min.js',
            docs: './public/docs'
         }
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
               '<%= config.public.concatenated %>': '<%= config.src.cache %>'
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
               '<%= config.public.minified %>': '<%= config.public.concatenated %>'
            }
         }
      },
      jsdoc: {
         dist: {
            src: '<%= config.public.concatenated %>',
            options: {
               destination: '<%= config.public.docs %>',
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