var gulp = require('gulp'),
	sass = require('gulp-sass'),
 	wiredep = require('wiredep').stream;


gulp.task('bower', function () {
  gulp.src('./app/index.html')
    .pipe(wiredep({
      directory : "app/bower_components"
    }))
    .pipe(gulp.dest('./app'));
});

 
gulp.task('sass', function () {
  gulp.src('./app/sass/mystyles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});