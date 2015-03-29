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
  it('creates files and folders', function () {
    assert.file([
      'package.json',
      'gulpfile.js',
      '.jshintrc',
      'dev/js',
      'dev/scss',
      'assets/js',
      'assets/css'
    ]);
  });
});
