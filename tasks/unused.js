/*
 * grunt-unused
 * https://github.com/ryanburgess/grunt-unused
 *
 * Copyright (c) 2014 Ryan Burgess
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  grunt.registerTask('unused', function(){
    var fs = require('fs'),
    options,
    reference,
    directory,
    unused,
    content,
    assets = [],
    links = [];

    options = this.options({
      reference: 'img/',
      directory: ['**/*.html'],
      remove: false
    });

    // Get list of files depending on the file directory
    grunt.file.expand({
      filter: 'isFile',
        cwd: options.reference // Change this reference to your directory
      }, 
      ['**/*']).forEach(function(file){
        assets.push(file);
    });

    // Find the references in content file
    grunt.file.expand({
      filter: 'isFile',
      }, options.directory).forEach(function(file){ // Change this to narrow down the search
      content = grunt.file.read(file);
      assets.forEach(function(asset){
        if(content.indexOf(asset) !== -1){
          links.push(asset);
        }
      });
    });

    // Output unused files list in console
    unused = grunt.util._.difference(assets, links);
    // output number of unused files
    grunt.log.ok(unused.length + ' file' + (unused.length === 1 ? '' : 's') + ' unused files:');

    unused.forEach(function(file){
      
      // delete file if remove is set to true
      if(options.remove === true){
        fs.unlinkSync(options.reference + file);
        console.log('deleted '+ options.reference + file);
      }else{
        console.log(options.reference + file);
      }

    });
  });
};
