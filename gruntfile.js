module.exports = function(grunt) {

  grunt.initConfig({
     concat: {
    dist: {
      src: ['js/src/*.js'],
      dest: 'js/dist/script.main.js',
    }
  },
  uglify: {
    dist: {
      src: ['js/dist/script.main.js'],
      dest: 'js/dist/script.main.min.js'
    }
  },
  sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles',
        src: ['*style.scss'],
        dest: 'styles',
        ext: '.css'
      }]
    }
  },
  watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['styles/*.scss'],
      tasks: ['concat','sass'],
    },
  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'sass']);


};