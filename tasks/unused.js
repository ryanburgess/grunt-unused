/*
 * grunt-unused
 * https://github.com/ryanburgess/grunt-unused
 *
 * Copyright (c) 2014 Ryan Burgess
 * Licensed under the MIT license.
 */
var path = require('path');
var _    = require('lodash');
module.exports = function (grunt) {
  'use strict';
  grunt.registerTask('unused', function(){
    var fs = require('fs'),
      moment = require('moment'),
      options,
      reference,
      directory,
      unused,
      content,
      datemod,
      todayDate,
      startDate,
      endDate,
      dayDiff,
      assets = [],
      links = [];

    options = this.options({
      reference: 'img/',
      directory: ['**/*.html'],
      remove: false,
      days: null,
      reportOutput: false,
      fail: false
    });

    //get current date and time
    function getDateTime() {

        var date = new Date(),
          hour,
          min,
          sec,
          year,
          month,
          day;

        //get hours
        hour = date.getHours();
        hour = (hour < 10 ? '0' : '') + hour;

        //get minutes
        min  = date.getMinutes();
        min = (min < 10 ? '0' : '') + min;

        //get seconds
        sec  = date.getSeconds();
        sec = (sec < 10 ? '0' : '') + sec;

        //get year
        year = date.getFullYear();

        //get month
        month = date.getMonth() + 1;
        month = (month < 10 ? '0' : '') + month;

        //get day
        day  = date.getDate();
        day = (day < 10 ? '0' : '') + day;

        return year + '-' + month + '-' + day;

    }

    todayDate = getDateTime();


    function deleteFile(fileRef){
      fs.unlinkSync(fileRef);
      console.log('deleted '+ fileRef);
    }

    function logFiles(fileRef){
      console.log(fileRef);
    }

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
    unused = _.difference(assets, links);

    // output number of unused files
    if (unused.length) {
      grunt.log.warn(unused.length + ' unused file' + (unused.length === 1 ? '' : 's') + ':');
    }
    else {
      grunt.log.ok('No unused files found.');
    }

    unused.forEach(function(file){

      // delete file if remove is set to true
      if(options.remove === true && options.days !== null){
        datemod = fs.statSync(options.reference + file).mtime.toISOString();
        datemod = datemod.replace(/\T.+/, '');
        startDate = moment(datemod, 'YYYY-M-DD');
        endDate = moment(todayDate, 'YYYY-M-DD');
        dayDiff = endDate.diff(startDate, 'days');

        if(dayDiff >= options.days){
          //delete file
          deleteFile(options.reference + file);
        }else{
          // log file references
          logFiles(options.reference + file);
        }
      }else if(options.remove === true){
        //delete file
        deleteFile(options.reference + file);
      }else{
        // log file references
        logFiles(options.reference + file);
      }
    });

    if (unused.length > 0 && options.reportOutput) {
      var destDir = path.dirname(options.reportOutput);
      if (!grunt.file.exists(destDir)) {
        grunt.file.mkdir(destDir);
      }
      grunt.file.write(options.reportOutput,unused.join('\r\n'));
      grunt.log.ok('Report "' + options.reportOutput + '" created.');
    }

    if (unused.length && !options.remove && options.fail) {
      grunt.fail.warn('Unused files were found.');
    }
  });
};
