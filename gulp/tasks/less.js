var gulp = require('gulp');
var less = require('gulp-less');
var path = require('../config');

gulp.task('less', function(){
    return gulp.src(path.srcPath.less + '/**/*.less')   //less源文件
        .pipe(less())                                   //执行编译
        .pipe(gulp.dest(path.distPath.css))             //输出目录
});