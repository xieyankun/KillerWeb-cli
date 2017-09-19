/*
*  @by kira
*  @2017-09-19
*  用于发布预览版本
*/
var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('../config');
var source = [
        path.srcPath.html + '/**/*', 
        '!' + path.srcPath.sass + '/**/*'
    ]
gulp.task('preview', function(){
    return gulp.src(source)
        .pipe(gulp.dest(path.distPath.html))
})
