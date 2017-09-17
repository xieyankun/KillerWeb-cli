// 监听需要执行的文件
var gulp = require('gulp');
var watch = require('gulp-watch');
var path = require('../config');

gulp.task('watch', function(){
    
    gulp.watch( path.srcPath.html + '/**/*.html', ['html'] )
})