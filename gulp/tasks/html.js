// HTML处理
var gulp = require('gulp');
var changed = require('gulp-changed');
var path = require('../config');

gulp.task('html', function() {
    return gulp.src( path.srcPath.html + '/**/*.html' )
        .pipe(changed( path.distPath.html) )
        .pipe(gulp.dest( path.distPath.html) );
});