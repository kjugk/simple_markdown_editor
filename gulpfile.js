'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var browserify = require('browserify');
var watchify = require('watchify');
var bebelify = require('babelify');
var envify = require('envify');

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

function bundleJsProduction(){
  var b = browserify({
    entries: ['./src/js/index.js'],
    transform: ['envify', 'babelify'],
  })
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error')  )
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
}

function bundleJs(){
  var b = browserify({
    entries: ['./src/js/index.js'],
    transform: ['babelify'],
    cache: {},
    packageCache: {},
    plugin: [watchify]

  })
  b.on('update', bundleJs)
  b.on('log', gutil.log)

  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error')  )
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
}

function scss(){
  gulp.src('./src/sass/application.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('application.css'))
      .pipe(gulp.dest('./dist'));
}

var fs = require('fs')
function cleanup(){
  fs.unlink('./dist/bundle.js')
  fs.unlink('./dist/bundle.js.map')
  fs.unlink('./dist/application.css')
}

gulp.task('cleanup', cleanup)
gulp.task('sass', scss);
gulp.task('js:production', bundleJsProduction);
gulp.task('js', bundleJs);
gulp.task('production', ['sass', 'js:production']);
gulp.task('default', ['sass', 'js']);
