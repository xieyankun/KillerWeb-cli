// 监听需要执行的文件
var gulp = require('gulp');
var watch = require('gulp-watch');
var path = require('../config');

gulp.task('watch', function(){
    // 处理 html
    gulp.watch( path.srcPath.html + '/**/*.html', ['html'] )
    // 处理 scss
    gulp.watch( path.srcPath.scss + '/**/*.scss', ['sass'] )
    // 处理 script
    gulp.watch( path.srcPath.script + '/**/*.js', ['script'] )
})
