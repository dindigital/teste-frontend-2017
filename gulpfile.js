'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var gulpCopy = require('gulp-copy');
var rename = require('gulp-rename');
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

var cssFiles = ['src/lib/**/*.css', 'src/assets/sass/main.sass'];

gulp.task('css', function () {
  gulp.src(cssFiles)
    .pipe(sass())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('app/css'));
});

var jsFiles = ['src/lib/**/*.js', 'src/assets/js/**/*.js'];

gulp.task('js', function () {
  gulp.src(jsFiles)
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/js'));
});

gulp.task('concatScripts', function() {
  return gulp.src('src/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('src/assets/js'));
});

gulp.task('copyJS', function() {
  gulp.src('src/assets/js/main.js')
  .pipe(gulp.dest('app/js'));
});

gulp.task('copyIMG', function() {
  gulp.src(['src/assets/img/*.png', 'src/assets/img/*.jpg'])
  .pipe(gulp.dest('app/img'));
});

gulp.task('files', function() {
  gulp
  .src(files)
  .pipe(connect.reload());
});

gulp.task( 'watch', function() {
  gulp.watch(cssFiles, ['css']);
  gulp.watch('src/shared/**/*.pug', ['views']);
  gulp.watch(files, ['files']);
});

gulp.task( 'connect', function() {
  connect.server({ root: 'app', livereload: true });
});

gulp.task('default', ['clean', 'views', 'css', 'concatScripts', 'copyJS', 'copyIMG', 'connect', 'watch']);