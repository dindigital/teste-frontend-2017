const gulp     = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('build-img', () => {

  return gulp.src('dev/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});
