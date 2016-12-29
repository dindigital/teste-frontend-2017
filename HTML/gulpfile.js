var gulp =      require('gulp');
var sass =      require('gulp-sass');
var merge =     require('merge-stream');
var rename =    require('gulp-rename');
var concat =    require('gulp-concat');
var cleanCSS =  require('gulp-clean-css');
var watch =     require('gulp-watch');
var minifyjs =  require('gulp-uglify');

// CSS
gulp.task('styles', function() {
    var sassStream, cssStream, cssMin;

    //compile sass
    sassStream = gulp.src('assets/sass/styles.scss').pipe(sass({
        errLogToConsole: true
    }));

    //select additional css files
    cssStream = gulp.src([
    ]);

    cssMin = merge(sassStream, cssStream)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('assets/css/'))
    .pipe(rename('styles.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8', keepSpecialComments: false}))
    .pipe(gulp.dest('./assets/css/'));
});

// Scripts
gulp.task('scripts', function () {
    gulp.src([
        'vendor/bower_components/jquery/dist/jquery.min.js',
        'vendor/bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
        'assets/js/swiper.min.js',
        'assets/js/lib/main.js'
    ])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('assets/js/'))
        .pipe(rename('scripts.min.js'))
        .pipe(minifyjs())
        .pipe(gulp.dest('assets/js/'));

});

// Observer
gulp.task('watch',function() {
    gulp.watch('assets/sass/**.scss', ['styles']);
    gulp.watch('assets/js/lib/**.js', ['scripts']);
});

// Default
gulp.task('default',['styles','scripts','watch']);