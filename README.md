Grunt Unused
============

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
      remove: false // set to true to delete unused files from project
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

The ablity to automatically delete unused file reference from project.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request


## License

MIT © [Ryan Burgess](http://ryanburgess.com)
