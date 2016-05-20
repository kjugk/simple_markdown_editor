'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var browserify = require('browserify');
var watchify = require('watchify');
var bebelify = require('babelify');

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var b = browserify({
  entries: ['./src/js/index.js'],
  transform: ['babelify'],
  cache: {},
  packageCache: {},
  plugin: [watchify]

})
b.on('update', bundle)
b.on('log', gutil.log)

function bundle(){
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
}

gulp.task('cleanup', cleanup)
gulp.task('sass', scss);
gulp.task('js', bundle);
gulp.task('default', ['js']);
