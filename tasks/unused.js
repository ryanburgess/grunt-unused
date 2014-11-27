'use strict';

module.exports = function (grunt) {
	grunt.registerTask('unused', function(){
    var options,
    reference,
    directory,
    unused,
    content,
    assets = [],
    links = [];

    options = this.options({
      reference: 'img/',
      directory: ['**/*.handlebars', '**/*.html']
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
    console.log('Found '+ unused.length +' unused files:');
    unused.forEach(function(file){
      console.log(file);
    });
  });
};
