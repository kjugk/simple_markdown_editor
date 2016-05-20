'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');

var browserify = require('browserify');
var watchify = require('watchify');
var bebelify = require('babelify');

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var b = browserify({
  entries: ['./js/index.js'],
  transform: ['babelify'],
  cache: {},
  packageCache: {},
  plugin: [watchify]

})
b.on('update', bundle)
b.on('log', gutil.log)

function productionBuild(){
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error')  )
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
}

function bundle(){
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error')  )
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
}

var fs = require('fs')
function cleanup(){
  fs.unlink('./dist/bundle.js')
}

gulp.task('cleanup', cleanup)
gulp.task('production', productionBuild);
gulp.task('js', bundle);
gulp.task('default', ['js']);
