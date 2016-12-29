const gulp         = require('gulp');
const usemin       = require('gulp-usemin');
const uglify       = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('usemin', () => {
  
  return gulp.src('dist/**/*.html')
    .pipe(usemin({
      js: [uglify],
      css: [autoprefixer]
    }))
    .pipe(gulp.dest('dist'));
});
