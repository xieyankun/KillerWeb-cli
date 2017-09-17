// HTML处理
var gulp = require('gulp');
var changed = require('gulp-changed');
var path = require('../config');
var srcPath = path.srcPath.html;
var distPath = path.distPath.html;

gulp.task('html', function() {
    return gulp.src(srcPath + '/**/*.html')
        .pipe(changed(distPath))
        .pipe(gulp.dest(distPath));
});
