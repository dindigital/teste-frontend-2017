const gulp 			= require('gulp');
const sass 			= require('gulp-sass');
const server 	  = require('browser-sync');

gulp.task('build-css', () => {
  return gulp.src('dev/stylesheets/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(server.stream());
});
