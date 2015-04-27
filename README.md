Simple Gulp SCSS generator!
===========================
[![Build Status](https://travis-ci.org/andeersg/generator-simple-gulp-scss.svg?branch=master)](https://travis-ci.org/andeersg/generator-simple-gulp-scss)
[![Coverage Status](https://coveralls.io/repos/andeersg/generator-simple-gulp-scss/badge.svg)](https://coveralls.io/r/andeersg/generator-simple-gulp-scss)

This is a simple and efficient way to get a Gulp setup for SCSS and JS up and running.

It creates a simple gulpfile with tasks for Javascript and SCSS, and a folder structure:
```
dev/js
dev/scss
assets/css - Compiled SCSS end up here.
assets/js - Javascript end up here.
```

## Usage

Install Yeoman and this generator:
```JS
npm install -g yo generator-simple-gulp-scss
```

Go to the folder or create a folder where you want your SCSS project:
```JS
yo simple-gulp-scss
```
