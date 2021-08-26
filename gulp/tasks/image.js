const gulp = require('gulp')
const imagemin = require('gulp-image')

module.exports = function fonts() {
  return gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'))
}