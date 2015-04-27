'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    this.option('skip-install', {
      desc: 'Skips the installation of dependencies',
      type: Boolean
    });
  },

  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the simple but awesome ' + chalk.red('Gulp SCSS') + ' generator!'
    ));

    var prompts = [{
      name: 'projectName',
      message: 'What is the name of this project?'
    },{
      name: 'projectDesc',
      message: 'Describe your project:'
    }];

    this.prompt(prompts, function (props) {
      this.projectName = props.projectName;
      this.projectDesc = props.projectDesc;

      done();
    }.bind(this));
  },
  writing: {
    app: function () {
      var context = { 
        projectName: this.projectName,
        projectDesc: this.projectDesc
      };
      this.mkdir('assets');
      this.mkdir('assets/css');
      this.mkdir('assets/js');
      this.mkdir('dev');
      this.mkdir('dev/js');
      this.mkdir('dev/scss');

      this.template('_package.json', 'package.json', context);
      this.template('_gulpfile.js', 'gulpfile.js', context);
      this.template('jshintrc', '.jshintrc', context);
    }
  },
  install: function() {
    /* istanbul ignore if  */
    if (!this.options['skip-install']) {
      this.installDependencies();
    }
  }
});
