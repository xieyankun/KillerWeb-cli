// 编译sass
var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('../config');
var handleErrors = require('../util/handleErrors');

gulp.task('sass', function(){
	return gulp.src([path.srcPath.scss + '/**/*.scss',  path.srcPath.css + '/**/*.css'])
		.pipe(sass())
        .on('error', handleErrors)
        .pipe(gulp.dest(path.distPath.css))
});
