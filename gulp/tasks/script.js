// JS文件压缩&重命名
var gulp = require('gulp');
var changed = require('gulp-changed');
var path = require('../config');
var srcPath = path.srcPath.script;

gulp.task('script', function() {
    return gulp.src([srcPath + '/*.js', srcPath + '/**/*.js', srcPath + '/*']) // 指明源文件路径、并进行文件匹配，排除 .min.js 后缀的文件
        .pipe(changed(path.distPath.script))       // 对应匹配的文件
        .pipe(gulp.dest(path.distPath.script)); // 输出路径
});
