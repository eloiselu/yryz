/**
 * Created by Mtime on 2018/10/31.
 */

var gulp = require('gulp');

// 自动刷新
var browserSync = require('browser-sync');
// 图片压缩
var imagemin = require('gulp-imagemin');
// 减少重复压缩
var cache = require('gulp-cache');
// 清理生成文件
var del = require('del');
//



// 创建 browser-sync 任务
gulp.task('browserSyncMobile', function () {
    browserSync({
        server: {
            baseDir: 'mobile'
        }
    })
})
gulp.task('browserSyncPC', function () {
    browserSync({
        server: {
            baseDir: 'PC'
        }
    })
})

// 创建图片压缩任务
gulp.task('imagesMobile', function () {
    return gulp.src('mobile/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/mobile/images'))
})
gulp.task('imagesPC', function () {
    return gulp.src('PC/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/PC/images'))
})

// 创建清理生成文件任务
gulp.task('clean', function () {
    del('dest');
})
gulp.task('clean:dist', function (callback) {
    del(['dist/**/*,', '!dist/images', '!dist/images/**/*'], callback)
})



// 监听命令
gulp.task('watchMobile', ['browserSyncMobile'], function () {
    gulp.watch('mobile/css/**/*.css', browserSync.reload);
    gulp.watch('mobile/*.html', browserSync.reload);
    gulp.watch('mobile/js/**/*.js', browserSync.reload);
})

gulp.task('watchPC', ['browserSyncPC'], function () {
    gulp.watch('PC/css/**/*.css', browserSync.reload);
    gulp.watch('PC/*.html', browserSync.reload);
    gulp.watch('PC/js/**/*.js', browserSync.reload);
})

// 构建命令
gulp.task('build', ['clean', 'imagesMobile', 'imagesPC'], function () {
    console.log('Building ')
})





// *.scss ： * 号匹配当前目录任意文件，所以这里 *.scss 匹配当前目录下所有scss文件
// **/*.scss ：匹配当前目录及其子目录下的所有scss文件。
//  !not-me.scss ：！号移除匹配的文件，这里将移除not-me.scss
//  *.+(scss|sass) ：+号后面会跟着圆括号，里面的元素用|分割，匹配多个选项。这里将匹配scss和sass文件。