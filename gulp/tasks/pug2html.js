const gulp = require('gulp')
const pug = require('gulp-pug')
const plumber = require('gulp-plumber')

module.exports = function pug2html(cb) {
    return gulp.src('src/pages/*.pug')
        .pipe(plumber())
        .pipe(pug())
        .pipe(gulp.dest('build'))
}