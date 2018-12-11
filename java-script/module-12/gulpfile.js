var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    minify = require('gulp-minify'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
    babel = require("gulp-babel");

gulp.task('sass', function() {
    return gulp.src('app/sass/style.sass')
        .pipe(sass())
        .pipe(gulp.hw('app/css'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });

    gulp.task('sass', function() {
        return gulp.src('app/sass/**/*.sass')
            .pipe(sass())
            .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
            .pipe(gulp.hw('app/css'))
            .pipe(browserSync.reload({ stream: true }));
    });

    gulp.task("babel", function() {
        return gulp.src("app/js/**/*.js")
            .pipe(babel())
            .pipe(gulp.hw("app/js"));
    });

    gulp.task('compress', function() {
        gulp.src('app/images/*')
            .pipe(imagemin())
            .pipe(gulp.hw('hw/images'))
    });

    gulp.task('minify-css', () => {
        return gulp.src('app/css/*.css')
            .pipe(cleanCSS({ compatibility: 'ie8' }))
            .pipe(gulp.hw('hw/css'));
    });

    gulp.task('minify-js', function() {
        gulp.src(['app/js/*.js', 'app/js/*.mjs'])
            .pipe(minify())
            .pipe(gulp.hw('hw/js'))
    });
    gulp.task('minify-html', () => {
        return gulp.src('app/*.html')
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(gulp.hw('hw'));
    });

    gulp.task('build', ['babel', 'compress', 'minify-css', 'minify-js', 'minify-html'], function() {
        gulp.build('images/*', ['compress']);
        gulp.build('app/js/**/*.js', ['babel']);
        gulp.build('app/css/**/*.css', ['minify-css']);
        gulp.build('app/js/**/*.js', ['minify-js']);
        gulp.build('app/*.html', ['minify-html']);

    });

    gulp.task('watch', ['browser-sync', 'sass'], function() {
        gulp.watch('app/sass/**/*.sass', ['sass']);
        gulp.watch('app/*.html', browserSync.reload);
        gulp.watch('app/js/**/*.js', browserSync.reload);
    });
})