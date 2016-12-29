const gulp          = require('gulp');
const server 	      = require('browser-sync').create();
const jshint        = require('gulp-jshint');
const jshintStylish = require('jshint-stylish');
const csslint       = require('gulp-csslint');
const htmlhint      = require('gulp-htmlhint');
const reload        = server.reload;

gulp.task('server', () => {
  server.init({
    server: {
      baseDir: ['dev', 'dist']
    }
  });

  // Listen to change events on HTML, CSS and JS and verify patterns with hints and reload server
  server.watch(['dev/**/*.html', 'dev/stylesheets/**/*.scss', 'dev/javascripts/**/*.js' ]).on("change", server.reload);


  gulp.watch('dev/javascripts/**/*.js').on('change', (event) => {
    console.log("JS Linting " + event.path);
    gulp.src(event.path)
        .pipe(jshint())
        .pipe(jshint.reporter(jshintStylish));
  });

  gulp.watch('dev/stylesheets/**/*.scss').on('change', (event) => {
    console.log("CSS Linting " + event.path);
    gulp.src(event.path)
        .pipe(csslint())
        .pipe(csslint.formatter());
  });

  gulp.watch('dev/**/*.html').on('change', (event) => {
    console.log("HTML Linting " + event.path);
    gulp.src(event.path)
        .pipe(htmlhint())
        .pipe(htmlhint.reporter());
  });  

});
