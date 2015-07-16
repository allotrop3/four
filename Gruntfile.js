module.exports = function(grunt)
{
   grunt.initConfig({
      config: {
         src: 'src/scripts',
         dist: 'dist/scripts',
         cache: '.tmp/scripts',
         output: 'four.js'
      },
      jshint: {
         options: {
            jshintrc: '.jshintrc',
         },
         files: ['<%= config.src %>/**/*.js']
      },
      browserify: {
         dist: {
            files: {
               '<%= config.cache %>/<%= config.output %>': '<%= config.src %>/**/*.js'
            }
         }
      },
      babel: {
         options: {
            sourceMap: true
         },
         dist: {
            files: {
               '<%= config.dist %>/<%= config.output %>': '<%= config.cache %>/<%= config.output %>'
            }
         }
      },
      watch: {
         files: ['<%= jshint.files %>'],
         tasks: ['jshint', 'browserify', 'babel']
      }
   });

   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-browserify');
   grunt.loadNpmTasks('grunt-babel');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', ['jshint', 'browserify', 'babel']);
};