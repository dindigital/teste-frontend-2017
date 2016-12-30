var gulp = require('gulp');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var pug = require('gulp-pug');
var gulpCopy = require('gulp-copy');

gulp.task('clean', function cleanAppFolder () {
  return gulp.src('app', {read: false})
    .pipe(clean());
});

var srcFiles = [ 'src/assets/*', '!src/assets/sass/*' ];
var srcDest = 'app/assets';

gulp.task('copy', function copyFiles() {
  return
    gulp.src(srcFiles)
    .pipe(gulpCopy())
    .pipe(gulp.dest(srcDest));
});

gulp.task('views', function buildHTML() {
  return gulp.src('src/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('app'));
});

gulp.task('default', ['clean', 'views', 'copy']);