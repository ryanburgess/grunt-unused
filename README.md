Grunt Unused
============

[![npm version](https://badge.fury.io/js/grunt-unused.svg)](http://badge.fury.io/js/grunt-unused) [![Build Status](https://travis-ci.org/ryanburgess/grunt-unused.svg?branch=master)](https://travis-ci.org/ryanburgess/grunt-unused)

A Grunt task to check for unused files (jpg, png, css, js etc) in a project files and output them to the console.


## Getting Started

If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```sh
npm install grunt-unused --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-unused');
```

*Tip: the [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) module makes it easier to load multiple grunt tasks.*

[grunt]: http://gruntjs.com
[Getting Started]: https://github.com/gruntjs/grunt/wiki/Getting-started


## Documentation

See the [Gruntfile](Gruntfile.js) in this repo for a full example.


### Example config

```js
grunt.initConfig({
  unused: {
    options: {
      reference: 'img/',
      directory: ['**/*.handlebars', '**/*.html'],
      days: 30,
      remove: false, // set to true to delete unused files from project
      reportOutput:'report.txt', // set to false to disable file output
      fail: false // set to true to make the task fail when unused files are found
    }
  }
});

grunt.loadNpmTasks('grunt-unused');
grunt.registerTask('default', ['unused']);
```

### Options

#### reference
Type: `String`
Default value: `img/`

A reference to the directory of files that are being checked if they are referenced in other project files.

#### directory
Type: `String|Array`
Default value: `['**/*.html']`

An array of directories that contain files that reference files in the reference directory.

#### remove
Type: `Boolean`
Default value: `false`

The ability to automatically delete unused file reference from project.

#### days
Type: `Number`
Default value: `false`

If remove is set to true and days has a value files will only delete if the file hasn't been modified after the length of days.

#### reportOutput
Type: `String`
Default value: `false`

Output unused files to a file. Set to false to disable

### fail
Type: `Boolean`
Default value: `false`

Allows the Grunt task to fail when unused files are found.

## Release History
* 0.2.3: Merge pull request [#8](https://github.com/ryanburgess/grunt-unused/pull/8)
* 0.2.2: Merge pull request [#6](https://github.com/ryanburgess/grunt-unused/pull/6) and [#7](https://github.com/ryanburgess/grunt-unused/pull/7)
* 0.2.1: Merge pull request [#5](https://github.com/ryanburgess/grunt-unused/pull/5)
* 0.1.9: Add jshint and jsonlint tests.
* 0.1.8: Add development dependencies.
* 0.1.7: add release history notes to documentation.
* 0.1.6: add the ability to only delete files after modified date.
* 0.1.5 updates to documentation.
* 0.1.4: add the option to automatically delete unused files from project.
* 0.1.3: updates to documentation.
* 0.1.2: clean up code.
* 0.1.1: fix [#1](https://github.com/ryanburgess/grunt-unused/issues/1) by replace `String.prototype.search` with `String.prototype.in..`
* 0.1.0: Initial release.

## Contributing
1. Fork it
2. Run `npm install`
3. Run Grunt watch `grunt watch`
4. Create your feature branch (`git checkout -b my-new-feature`)
5. Commit your changes (`git commit -am "Add some feature"`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request


## License

MIT © [Ryan Burgess](http://github.com/ryanburgess)
