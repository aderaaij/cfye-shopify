var
  gulp                = require('gulp'),
  plugins             = require('gulp-load-plugins')();

gulp.task('build', function(cb) {
  plugins.sequence(
    'clean',
    [
      'bower'
    ],
    [
      'images',
      'scripts:standalone',
      'iconfont',
      'copy',
      'svgsprite'
    ],
    [
      'styles',
      'scripts',
      'templates'
    ],
    [
      'zip'
    ],
    cb
  );
});