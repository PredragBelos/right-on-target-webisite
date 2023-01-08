const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const clean_css = require('gulp-clean-css');
const replaceQuotes = require('gulp-replace-quotes');
const imagemin = require('gulp-imagemin');

// Function for create css from scss
gulp.task('scss-compiler', function () {
    return (
        gulp.src('src/style/scss/index.scss')
            .pipe(sass())
            .pipe(autoprefixer('last 2 versions'))
            .pipe(clean_css())
            .pipe(gulp.dest('src/style/css'))
    )
});

// Function for replacing quotes
gulp.task('replace-quotes', function () {
    return gulp.src('src/components/**/*.jsx')
        .pipe(replaceQuotes({
            quote: 'single'
        }))
        .pipe(gulp.dest('src/components'))
});

// Function for compresing images
gulp.task('image-min', function () {
    return gulp.src('public/images/**')
    .pipe(imagemin())
    .pipe(gulp.dest('public/images'))
});

// Function for watching a changes
gulp.task('watch', function () {
    gulp.watch('src/style/scss/**/*.scss', gulp.series('scss-compiler', 'replace-quotes'));
});

gulp.task('default', gulp.series('watch'));