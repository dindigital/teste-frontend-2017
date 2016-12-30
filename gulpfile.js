var gulp = require('gulp');
var gutil = require('gulp-util');
var pug = require('gulp-pug');

gulp.task('views', function buildHTML() {
  return gulp.src('src/_shared/*.pug')
  .pipe(pug({
    opts.locals('app')
  }))
});

gulp.task('default');