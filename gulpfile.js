'use strict';
var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require("browser-sync"),
	reload = browserSync.reload;

var path = {
	watch: {
		html: "./*.html",
		js: "./*.js"
	}
}


gulp.task('html:build', function () {
	gulp.src(path.watch.html)
		.pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
	gulp.src(path.watch.js)
		.pipe(reload({stream: true}));
});

gulp.task('build', [
	'html:build',
	'js:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
});

gulp.task('webserver', function () {
	browserSync({
		server: {
			baseDir: "./"
		},
		port: 8080,
		open: true,
		notify: false
	});
});

gulp.task('default',['build', 'webserver', 'watch']);