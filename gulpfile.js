var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  // 'scss/vendor/foundation',
  // 'scss/vendor/motion-ui'
  '../../bower_components/angular-material-sass-files/angular-material.scss'
];

gulp.task('sass', function() {
  return gulp.src('./assets/sass/app.sass')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['./assets/sass/**/*.sass'], ['sass']);
});
