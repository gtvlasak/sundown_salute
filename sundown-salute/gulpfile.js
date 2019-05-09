var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
        notify: false
    })
})

gulp.task('watch', gulp.parallel('browserSync', 'sass', function(done){
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('app/*.html').on("change", browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload);
    browserSync.reload();
    // Other directories being watched by the watch task
    done();
}));

