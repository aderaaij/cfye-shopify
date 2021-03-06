var
  gulp                = require('gulp'),
  plugins             = require('gulp-load-plugins')(),
  config              = require('../config/svgsprite');

gulp.task('svgsprite', function() {
  gulp.src(config.source)

    // SVG Sprite
    .pipe(plugins.svgSprite(config.svg))

    .pipe(plugins.rename(config.rename))

    // Flatten output
    .pipe(plugins.flatten())

    // Output to dest
    .pipe(gulp.dest(config.dest));
});
