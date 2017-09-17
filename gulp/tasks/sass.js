var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('../config');
var handleErrors = require('../util/handleErrors');

gulp.task('sass', function(){
	return gulp.src(path.srcPath.scss + '/**/*.scss' )
		.pipe(sass())
        .on('error', handleErrors)
        .pipe(gulp.dest(path.srcPath.css))
        .pipe(gulp.dest(path.distPath.css))
});