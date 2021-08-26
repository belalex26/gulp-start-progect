const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))
const plumber = require('gulp-plumber')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const shorthand = require('gulp-shorthand')
const gulpStylelint = require('gulp-stylelint')
const rename = require("gulp-rename")
const autoprefixer = require('gulp-autoprefixer')

module.exports = function styles() {
    return gulp.src('src/styles/*.scss')
      .pipe(plumber())
      .pipe(gulpStylelint({
        failAfterError: false,
        reporters: [
          {
            formatter: 'string',
            console: true
          }
        ]
      }))
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(shorthand())
      .pipe(cleanCSS({
        debug: true,
        compatibility: '*'
      }, details => {
        console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
      }))
      .pipe(sourcemaps.write())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('build/css'))
  }