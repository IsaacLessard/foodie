var gulp = require('gulp');
var mocha = require('gulp-mocha');
var sass = require('gulp-sass');

gulp.task('default', ['sass']);

gulp.task('test', function (){
	return gulp.src('./test/*.js', {read: false})
	.pipe(mocha())
})

gulp.task('sass', function(){
	gulp.src('./scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'))
})

gulp.task('sass:watch', function(){
	gulp.watch('./scss/*.scss', ['sass']);
})
