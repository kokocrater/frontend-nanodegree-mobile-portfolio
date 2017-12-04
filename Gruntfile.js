module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
          css: {
            src: ['views/css/style.css', 'views/css/bootstrap-grid.css'],
            dest: 'views/css/styles-concat.css',
          },
        },

        uglify: {
          js: {
            src: ['views/js/main.js'],
            dest: 'views/dist/script.min.js',
          }
        },
        cssmin: {
          css: {
            src: ['views/css/styles-concat.css'],
            dest: 'views/dist/styles.min.css',
          }
        },

        watch: {
            js: {
              files: ['views/js/main.js'],
              tasks: ['uglify:js'],
            },
            css: {
              files: ['views/css/style.css', 'views/css/bootstrap-grid.css'],
              tasks: ['concat:css', 'cssmin:css']
            }
        }
    });

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.registerTask('default', ['watch']);
}
//reference: https://www.youtube.com/watch?v=TMKj0BxzVgw&t=14s