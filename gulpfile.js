'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');

var files = [ 
  'app/index.html', 
  'app/css/main.css',
  'app/js/main.js'
];

gulp.task('clean', function () {
  return gulp.src('app').pipe(clean());
});

gulp.task('views', function () {
  return gulp.src('src/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('app'));
});

var cssFiles = [
  'src/lib/owl.carousel/dist/assets/owl.carousel.min.css', 
  'src/lib/owl.carousel/dist/assets/owl.theme.default.min.css',
  'src/lib/normalize-css/normalize.css', 
  'src/assets/sass/main.sass'
];

gulp.task('css', function () {
  gulp.src(cssFiles)
    .pipe(sass())
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(autoprefixer({ 
      browsers: ['last 2 versions'], 
      flexbox: 'no-2009' 
    }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('app/css'));
});

var jsFiles = [
  'src/lib/jquery/dist/jquery.min.js', 
  'src/lib/owl.carousel/dist/owl.carousel.min.js', 
  'src/assets/js/**/*.js'
];

gulp.task('js', function () {
  gulp.src(jsFiles)
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/js'));
});

gulp.task('copyIMG', function () {
  gulp.src(['src/assets/img/*.png', 'src/assets/img/*.jpg'])
  .pipe(gulp.dest('app/img'));
});

gulp.task('files', function () {
  gulp.src(files).pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(files, ['files']);
  gulp.watch('src/shared/**/*.pug', ['views']);
  gulp.watch(cssFiles, ['css']);
  gulp.watch(jsFiles, ['js']);
});

gulp.task( 'connect', function () {
  connect.server({ root: 'app', livereload: true });
});

gulp.task('default', ['clean', 'views', 'css', 'js', 'copyIMG', 'connect', 'watch']);