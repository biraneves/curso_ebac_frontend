const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

function comprimeImagens() {
    return gulp.src('./source/assets/images/*').pipe(imagemin()).pipe(gulp.dest('./build/assets/images/'));
}

function compilaSass() {
    return gulp
        .src('./source/assets/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sourcemaps.write('./build/assets/css/maps'))
        .pipe(gulp.dest('./build/assets/css/'));
}

function comprimeJS() {
    return gulp.src('./source/assets/js/*.js').pipe(uglify()).pipe(obfuscate()).pipe(gulp.dest('./build/assets/js/'));
}

exports.default = function () {
    gulp.watch('./source/assets/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens));
    gulp.watch('./source/assets/scss/*', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/assets/js/*', { ignoreInitial: false }, gulp.series(comprimeJS));
};
