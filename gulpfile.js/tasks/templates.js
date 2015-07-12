var
  gulp                = require('gulp'),
  plugins             = require('gulp-load-plugins')(),
  config              = require('../config/templates'),
  errorHandler        = require('../lib/errorHandler');


// Execute Jade Templates
gulp.task('templates', function() {
  return gulp.src(config.source)

  // Only build changed files
  .pipe(plugins.changed(config.dest, {extension: '.liquid'}))

  // Catch errors
  .on('error', errorHandler)

  .pipe(plugins.if(global.isWatching, plugins.cached('jade')))

  // Watch partials for change
  .pipe(plugins.jadeInheritance({basedir: config.base}))

  // Ignore build of files starting with _
  .pipe(plugins.filter(function (file) {return !/\/_/.test(file.path) && !/^_/.test(file.relative);}))

  // Output Jade
  .pipe(plugins.jade({pretty: true}))

  // Catch errors
  .on('error', errorHandler)

  // Rename to something usefull for Shopify
  .pipe(plugins.rename(config.rename))

  // Distribute to build path
  .pipe(gulp.dest(config.dest))

  // Show notification
  .pipe(plugins.if(global.isWatching, plugins.notify({ message: 'templates task complete' })));
});