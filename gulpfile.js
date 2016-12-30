'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var gulpCopy = require('gulp-copy');

gulp.task('clean', function cleanAppFolder () {
  return gulp.src('app', {read: false})
    .pipe(clean());
});

gulp.task('views', function buildHTML() {
  return gulp.src('src/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('app'));
});

gulp.task('sass', function () {
  return gulp.src('src/sass/main.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('src/sass/**/*.sass', ['sass']);
});

var srcFiles = [ 'src/_assets/*', '!src/_assets/sass/*' ];
var srcDest = 'app/assets';

gulp.task('copy', function copyFiles() {
  return
    gulp.src(srcFiles)
    .pipe(gulpCopy())
    .pipe(gulp.dest(srcDest));
});

gulp.task('default', ['clean', 'views', 'copy']);