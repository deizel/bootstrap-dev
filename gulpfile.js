/* jslint node: true */

(function () {
	'use strict';

	var gulp   = require('gulp'),
		less   = require('gulp-less'),
		uglify = require('gulp-uglify');

	var paths = {
		styles:  './source/less/*.less',
		scripts: './source/*.js',
		output:  './'
	};

	gulp.task('styles', function () {
		gulp.src(paths.styles)
			.pipe(less())
			.pipe(gulp.dest(paths.output));
	});

	gulp.task('scripts', function () {
		gulp.src(paths.scripts)
			.pipe(uglify())
			.pipe(gulp.dest(paths.output));
	});

	gulp.task('watch', function () {
		gulp.watch(paths.styles, ['styles']);
		gulp.watch(paths.scripts, ['scripts']);
	});

	gulp.task('default', ['styles', 'scripts', 'watch']);

})();
