module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    unused: {
      options: {
        reference: 'img/',
        directory: ['**/*.handlebars', '**/*.html']
      },
    }
  });
  grunt.loadNpmTasks('grunt-unused');
  grunt.registerTask('default',['unused']);
};