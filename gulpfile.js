"use strict";

// Gulp plugins
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const gutil = require('gulp-util');
const del = require('del');
const runSequence = require('run-sequence');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');

let env = gutil.env.env;

gulp.task('clean', () => {
  return del(['dist/**/*']);
});

let defaultTasks = [];
let watchTasks = [];

const tools = {
  sourcemaps: sourcemaps,
  concat: concat,
  debug: debug,
  gutil: gutil,
  runSequence: runSequence,
  changed: changed,
  plumber: plumber
};

require('./build-tasks/css')(gulp, tools, defaultTasks, watchTasks, env);

require('./build-tasks/javascript')(gulp, tools, defaultTasks, watchTasks, env);

gulp.task('watch', watchTasks);

gulp.task('default', done => {
  runSequence('clean', defaultTasks, done);
});
