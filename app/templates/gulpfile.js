var gulp = require('gulp');
var jshint = require('gulp-jshint');

var karma = require('karma').server;

var PATHS = {
  src: 'src/**/*.js',
  test: 'test/**/*.spec.js'
};

gulp.task('lint', function () {
  return gulp.src([PATHS.src, PATHS.test]).pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('tdd', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});

gulp.task('default', ['lint', 'test']);
