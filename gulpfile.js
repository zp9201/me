var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
// var minify = require('gulp-minify-css');
var cssnano = require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin')
gulp.task('script', function () {
    gulp.src(['./js/main.js', './js/index.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
})
gulp.task('style', function () {
    gulp.src(['./css/index.css', './css/style.css', './css/reset.css'])
    // .pipe(minify('all.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('./dist'))
})
gulp.task('html', function () {
    // 1.匹配到要处理的文件
    gulp.src(['./index.html'])
    // 2.压缩操作
        .pipe(htmlmin({collapseWhitespace: true}))//是否压缩空白符
        // 3.指定输出目录
        .pipe(gulp.dest('./dist'));
})

