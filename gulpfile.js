'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');

var browserify = require('browserify');
var watchify = require('watchify');
var bebelify = require('babelify');
var reactify = require('reactify');

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

var b = watchify(browserify({
  entries: ['./index.js'],
  debug: true
}))
.transform(bebelify)
.transform(reactify)
.on('update', bundle);
.on('log', gutil.log);

function bundle(){
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error')  )
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
}

gulp.task('js', bundle);
gulp.task('default', ['js']);