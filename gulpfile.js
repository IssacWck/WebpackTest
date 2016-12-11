var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var livereload = require('gulp-livereload');

//gulp.task('jshint', function () {
//	return gulp.src('public/angular/controller/*.js').pipe(jshint()).pipe(jshint.reporter('default'));
//});

//gulp.task('minify', function () {
//	return gulp.src('public/angular/controller/*.js').pipe(concat('all.js')).pipe(gulp.dest('gulpTest'))
//		.pipe(uglify()).pipe(rename('all.min.js')).pipe(gulp.dest('gulpTest')).pipe(livereload());
//});

gulp.task('minify', function () {
	return gulp.src('assets/weui/*.css').pipe(concat('index.css')).pipe(minifyCss()).pipe(rename('index.css')).pipe(gulp.dest('dist')).pipe(livereload());
});

//gulp.task('watch', function () {
//	gulp.watch('public/angular/controller/*.js', ['jshint', 'minify'])
//});

//gulp.task('default', ['jshint', 'minify', 'watch']);
gulp.task('default', ['minify']);

//var mocha = require('gulp-mocha');
//var uitl = require('gulp-util');
//
//gulp.task('default', function () {
//	return gulp.src(['public/angular/controller/*.js'], { read: false }).pipe(mocha({
//		reporter: 'spec',
//		globals: {
//			should: require('should')
//		}
//	}));
//});