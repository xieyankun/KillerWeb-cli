// 处理图片
var gulp = require('gulp');
var path = require('../config');

gulp.task('image', function(){
    return gulp.src( path.srcPath.image+'/**/*' ) // 指明源文件路径，如需匹配指定格式的文件，可以写成 .{png,jpg,gif,svg}
        .pipe(gulp.dest( path.distPath.image )); // 输出路径
});
