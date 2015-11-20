var gulp = require('gulp');
var sass = require('gulp-sass');
var eslint = require('gulp-eslint');

gulp.task('default', ['lint']);

gulp.task('sass', function(){
	gulp.src('./scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'))
})

gulp.task('sass:watch', function(){
	gulp.watch('./scss/*.scss', ['sass']);
})

gulp.task('lint', ['sass'], function () {
    return gulp.src('./src/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
})
