var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('stylus', function () {
  return gulp.src('./css/style.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./css'));
});

// Autoprefixer
gulp.task('autoprefixer', function() {
    gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Firefox > 20', '> 5%'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function() {
	gulp.watch('css/components/*.styl', ['stylus']);
    gulp.watch('css/style.css', ['autoprefixer']);
});


gulp.task('default', ['stylus', 'autoprefixer', 'watch']);