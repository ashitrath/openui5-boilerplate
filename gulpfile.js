var gulp       = require('gulp');
var gulpif     = require('gulp-if');
var prettydata = require('gulp-pretty-data');
var uglify     = require('gulp-uglify');
var ui5preload = require('gulp-ui5-preload');

gulp.task(
  'ui5preload',
  function() {
    return gulp.src([
      '**/**.+(js|xml|properties)',
      '!Component-preload.js',
      '!gulpfile.js',
      '!node_modules/**'
    ])
    .pipe(gulpif('**/*.js', uglify())) //only pass .js files to uglify
    .pipe(gulpif('**/*.xml', prettydata({ type: 'minify' }))) // only pass .xml to prettydata
    .pipe(ui5preload({
      base: './webapp',
      namespace: 'sap.ui.app',
      fileName: 'Component-preload.js'
    })).pipe(gulp.dest('./webapp'));
  }
)
