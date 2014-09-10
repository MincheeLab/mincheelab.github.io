'use strict';

var gulp = require('gulp');

gulp.task('watch', ['wiredep', 'styles'] ,function () {
	gulp.watch('app/*.html');
	gulp.watch('app/views/**/*.html');
	gulp.watch('app/components/**/*.html');

	gulp.watch('app/styles/**/*.scss', ['styles']);
 	gulp.watch('app/scripts/**/*.js', ['scripts']);
 	gulp.watch('app/images/**/*', ['images']);
 	gulp.watch('bower.json', ['wiredep']);
});
