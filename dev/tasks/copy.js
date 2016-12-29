const gulp = require('gulp');


gulp.task('copy', ['clean'], () => {
  
  return gulp.src('dev/*.html')
    .pipe(gulp.dest('dist'));
});
