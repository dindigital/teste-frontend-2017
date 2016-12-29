const gulp   = require('gulp');
const server = require('browser-sync');

gulp.task('watch', ['server'], () => {
  gulp.watch("dev/**/*.scss", ['build-css']);
  gulp.watch("dist/**/*.html").on('change', server.reload);
});