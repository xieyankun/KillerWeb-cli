// 脚本压缩&重命名
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var debug = require('gulp-debug');
var path = require('../config');

gulp.task('scriptRelease', function() {
    return gulp.src( [path.srcPath.script+'/*.js', '!' + path.srcPath.script+'/*.min.js'] ) // 指明源文件路径、并进行文件匹配，排除 .min.js 后缀的文件
        .pipe(debug({title: '编译:'}))
        .pipe(rename({ suffix: '.min' })) // 重命名
        .pipe(uglify()) // 使用uglify进行压缩，并保留部分注释
        .pipe(gulp.dest( path.distPath.script )); // 输出路径
});