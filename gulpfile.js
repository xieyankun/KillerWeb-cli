var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true});

// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var watch = require('gulp-watch');
// var livereload = require('gulp-livereload');
// var webserver = require('gulp-webserver');
// var changed = require('gulp-changed');

// var srcPath = {
//     html    : './src',
//     css     : './src/scss',
//     script  : './src/js',
//     image   : './src/images'
// };
// var distPath = {
//     html    : './dist',
//     css     : './dist/css',
//     script  : './dist/js',
//     image   : './dist/images'
// };

// // HTML处理
// gulp.task('html', function() {
//     return gulp.src( srcPath.html + '/**/*.html' )
//         .pipe(changed( distPath.html) )
//         .pipe(gulp.dest( distPath.html) );
// });

// // SASS 处理
// gulp.task('sass', function(){
//     console.log(srcPath.css)
//     return gulp.src( srcPath.css + '/**/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest(distPath.css))
// });

// // imagemin 图片压缩
// gulp.task('images', function(){
//     return gulp.src( srcPath.image + '/**/*' ) // 指明源文件路径，如需匹配指定格式的文件，可以写成 .{png,jpg,gif,svg}
//         .pipe(changed( destPath.image ))
//         .pipe(imagemin({
//             progressive: true, // 无损压缩JPG图片
//             svgoPlugins: [{removeViewBox: false}], // 不要移除svg的viewbox属性
//             use: [pngquant()] // 深度压缩PNG
//         }))
//         .pipe(gulp.dest( destPath.image )); // 输出路径
// });

// // 监听任务
// gulp.task('watch',function(){
//     // 监听 html
//     gulp.watch( srcPath.html + '/**/*.html', ['html'] )

//     gulp.watch( srcPath.html + '/**/*.css', ['sass'] )
// });

// gulp.task('webserver', function() {
//     gulp.src( distPath.html )       // 服务器目录（.代表根目录）
//     .pipe(webserver({               // 运行gulp-webserver
//         livereload: true,           // 启用LiveReload
//         open: true                  // 服务器启动时自动打开网页
//     }));
// });

// gulp.task('default', ['webserver', 'html', 'sass', 'watch']);



