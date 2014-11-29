module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    unused: {
      options: {
        reference: 'img/',
        directory: ['**/*.handlebars', '**/*.html'],
        days: 30,
        remove: false // set to true to delete unused files from project
      },
    }
  });
  grunt.loadNpmTasks('grunt-unused');
  grunt.registerTask('default',['unused']);
};