var gulp = require('gulp');
var gutil = require('gulp-util');
var pug = require('gulp-pug');

gulp.task('views', function buildHTML() {
  return gulp.src('src/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('app'));
});

gulp.task('default', ['views']);