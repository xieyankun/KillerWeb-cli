// 监听需要执行的文件
var gulp = require('gulp');
var watch = require('gulp-watch');
var path = require('../config');

gulp.task('watch', function(){
    // 处理html
    gulp.watch( path.srcPath.html + '/**/*.html', ['html'] )
    // 处理scss
    gulp.watch( path.srcPath.scss + '/**/*.scss', ['sass'] )
})
