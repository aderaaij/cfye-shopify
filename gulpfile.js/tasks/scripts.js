var
  gulp                = require('gulp'),
  plugins             = require('gulp-load-plugins')(),
  config              = require('../config/scripts'),
  errorHandler        = require('../lib/errorHandler');

// Scripts
gulp.task('scripts', function() {
  return gulp.src(config.source)

  // Concatinate in one file
  .pipe(plugins.concat(config.concat))

  // Catch errors
  .on('error', errorHandler)

  // Add a .min version
  .pipe(plugins.rename(config.rename))

  // Minify with jsUglify
  .pipe(plugins.uglify())

  // Catch errors
  .on('error', errorHandler)

  // Distribute to build
  .pipe(gulp.dest(config.dest))

  // Show notifcation
  .pipe(plugins.if(global.isWatching, plugins.notify({ message: 'Scripts task complete' })));

});