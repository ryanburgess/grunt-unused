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
    },
    jshint: {
      all: ['**/*.js'],
      options: {
        reporter: require('jshint-stylish'),
        curly: true,
        eqeqeq: true,
        eqnull: false,
        browser: true,
        indent: 2,
        quotmark: 'single',
        unused: false,
        ignores: ['node_modules/**/*.js'],
      },
    },
    jsonlint: {
      sample: {
        src: [ 'package.json' ]
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      json: {
        files: ['**/*.json'],
        tasks: ['newer:jsonlint'],
        options: {
          spawn: false
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-unused');
  grunt.registerTask('test',['jshint', 'jsonlint']);
  grunt.registerTask('default',['unused']);
};
