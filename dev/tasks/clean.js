const gulp  = require('gulp');
const clean = require('gulp-clean');

gulp.task('clean', () => {
	
  return gulp.src('dist')
    .pipe(clean());
});
