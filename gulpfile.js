const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;

// Watch scss AND html files, doing different things with each.
gulp.task('serve', () => {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.css").on("change", reload);
    gulp.watch("*.js").on("change", reload);
    gulp.watch("*.html").on("change", reload);
});