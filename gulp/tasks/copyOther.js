var gulp    = require('gulp');
var gulpIf  = require('gulp-if');
var changed = require('gulp-changed');

gulp.task('copyOther', function() {
  var dest = '.tmp/assets/fonts';

  return gulp.src(['src/fonts/**', 'src/sounds/**'])
    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(gulpIf(global.isWatching, gulp.dest(dest)))  // for development
    .pipe(gulpIf(!global.isWatching, gulp.dest('dist/assets/fonts')))   // for dist
});
