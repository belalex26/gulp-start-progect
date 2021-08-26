var gulp = require('gulp')

var serve = require('./gulp/tasks/serve')
var pug2html = require('./gulp/tasks/pug2html')
var styles = require('./gulp/tasks/style')
var script = require('./gulp/tasks/script')
var fonts = require('./gulp/tasks/fonts')
var image = require('./gulp/tasks/image')
var clean = require('./gulp/tasks/clean')
var svgSprite = require('./gulp/tasks/svgSprite')

function setMode(isProduction = false) {
    return cb => {
      process.env.NODE_ENV = isProduction ? 'production' : 'development'
      cb()
    }
  }

const dev = gulp.parallel(pug2html, styles, script, fonts, image, svgSprite)

const build = gulp.series(clean, dev)

module.exports.start = gulp.series(setMode(), build, serve)
module.exports.build = gulp.series(setMode(true), build)
