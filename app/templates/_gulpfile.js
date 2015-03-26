var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');

gulp.task('css', function () {
  return gulp.src('dev/scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['last 2 versions', 'Explorer 9']}))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('js', function() {
  return gulp.src('dev/js/*.js')
    .pipe(jshint('.jshintrc')) // https://github.com/jshint/jshint/blob/master/examples/.jshintrc
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest('assets/js'));
});

// Default task
gulp.task('default', ['css', 'js']); // , 'images'

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('dev/scss/**/*.scss', ['css']);

  // Watch .js files
  gulp.watch('dev/js/*.js', ['js']);
});