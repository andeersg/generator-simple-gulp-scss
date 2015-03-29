'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');
var fs = require('fs');

describe('yeoman:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        someOption: true
      })
      .on('end', done);
  });

  // Test to see if all files are created.
  it('creates files', function () {
    assert.file([
      'package.json',
      'gulpfile.js',
      '.jshintrc'
    ]);
  });

  // Test to see if folders are created.
  it('create folder structure', function() {
    var filePaths = [
      'dev/js',
      'dev/scss',
      'assets/js',
      'assets/css'
    ];
    filePaths.forEach(function(path) {
      var stat = fs.statSync(path);
      if (!stat.isDirectory) {
        throw('Folder: "' + path + '" does not exist.');
      }
    });
  });
});
