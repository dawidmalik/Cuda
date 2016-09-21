var gulp = require('gulp'),
	compileSASS = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;

gulp.task('sass', function() {
	gulp.src('sass/main.scss')
	.pipe(compileSASS({outputStyle: 'expanded'}).on('error', compileSASS.logError))
	.pipe(gulp.dest('css'))
	.pipe(compileSASS({outputStyle: 'compressed'}).on('error', compileSASS.logError))
	.pipe(concat('main.min.css'))
	.pipe(gulp.dest('css'));
});

gulp.task('js', function() {
	gulp.src('js/main.js')
	.pipe(uglify({preserveComments: 'license'}))
	.pipe(concat('main.min.js'))
	.pipe(gulp.dest('js'));
});

gulp.task('default', function() {
	browserSync.init({server: true});
	gulp.watch('sass/*.scss', ['sass']).on('change', reload);
	gulp.watch('js/*.js', ['js']).on('change', reload);
	gulp.watch('*.html').on('change', reload);
});
