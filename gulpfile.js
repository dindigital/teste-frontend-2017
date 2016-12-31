'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var gulpCopy = require('gulp-copy');
var connect = require('gulp-connect');
var files = [ 'app/index.html', 'app/assets/css/main.css', 'assets/js/main.js' ];

gulp.task('clean', function cleanAppFolder () {
  return gulp.src('app/**/*', {read: false})
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
    .pipe(gulp.dest('src/css'))
});

gulp.task('concatStyles', function() {
  return gulp.src('src/**/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('src/_assets/css'));
});

gulp.task('concatScripts', function() {
  return gulp.src('src/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('src/_assets/js'));
});

var srcFiles = [ 'src/_assets/*', '!src/_assets/sass/*' ];
var srcDest = 'app/assets';

gulp.task('copy', function copyFiles() {
  return
    gulp.src(srcFiles)
    .pipe(gulpCopy())
    .pipe(gulp.dest(srcDest));
});

gulp.task('files', function() {
  gulp
  .src(files)
  .pipe(connect.reload());
});

gulp.task( 'watch', function() {
  gulp.watch('src/_assets/sass/**/*.sass', ['sass']);
  gulp.watch('src/_shared/**/*.pug', ['views']);
  gulp.watch(files, ['files']);
});

gulp.task( 'connect', function() {
  connect.server({ root: 'app', livereload: true });
});

gulp.task('default', ['clean', 'views', 'sass', 'concatStyles', 'concatScripts', 'copy', 'connect', 'watch']);