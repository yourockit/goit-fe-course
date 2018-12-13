'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('gulp-cssnano');
const gcmq = require('gulp-group-css-media-queries');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const svgstore = require('gulp-svgstore');
const plumber = require('gulp-plumber');
const rigger = require('gulp-rigger');
const stylelint = require('gulp-stylelint');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const sequence = require('run-sequence');

gulp.task('html', () =>
    gulp
    .src('./src/*.html')
    .pipe(rigger())
    .pipe(
        htmlmin({
            collapseWhitespace: true,
        }),
    )
    .pipe(gulp.dest('./dist')),
);

gulp.task('styles', () =>
    gulp
    .src('./src/scss/styles.scss')
    .pipe(plumber())
    .pipe(
        stylelint({
            reporters: [{ formatter: 'string', console: true }],
        }),
    )
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gcmq())
    .pipe(gulp.dest('./dist/css'))
    .pipe(cssnano())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream()),
);

gulp.task('index', () =>
    gulp
    .src('./src/js/**/*.js')
    .pipe(plumber())
    .pipe(
        babel({
            presets: ['env'],
        }),
    )
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(uglify())
    .pipe(rename('index.min.js'))
    .pipe(gulp.dest('./dist/js')),
);

gulp.task('fonts', () =>
    gulp.src('./src/fonts/**/*.{woff,woff2}').pipe(gulp.dest('./dist/fonts')),
);

gulp.task('watch', () => {
    gulp.watch('src/**/*.html', ['html']).on('change', browserSync.reload);
    gulp.watch('src/scss/**/*.scss', ['styles']);
    gulp.watch('src/js/**/*.js', ['index']);
});

gulp.task('serve', ['styles'], () =>
    browserSync.init({
        server: './dist',
        notify: false,
        open: true,
        cors: true,
        ui: false,
        logPrefix: 'DevServer',
        host: 'localhost',
        port: 3000,
    }),
);

gulp.task('del:dist', () => del('./dist'));

gulp.task('prepare', () => del(['**/.gitkeep', 'README.md', 'banner.png']));

gulp.task('dist', cb =>
    sequence(
        'del:dist',
        'svg-sprite',
        'images',
        'fonts',
        'styles',
        'html',
        'index',
        cb,
    ),
);

gulp.task('start', cb => sequence('dist', 'serve', 'watch'));