/**
 * Created by chenyansong on 2016/12/17.
 */
let gulp = require('gulp'),
    path = require('path'),
    del = require('del'),
    vulcanize = require('gulp-vulcanize');

let filePath = {
    root: path.normalize('./src'),
    src: path.normalize('src/**/*.html'),
    dist: path.normalize('./dist')
};

gulp.task('watch', () => {
    "use strict";
    gulp.watch([filePath.root, filePath.src], () => {
        try {
            gulp.src(filePath.src)
                .pipe(vulcanize({
                    abspath: '',
                    excludes: [],
                    stripExcludes: false,
                    inlineScripts: false
                })).pipe(gulp.dest(filePath.dist));
        }
        catch (err){
            console.log(err);
        }
    })
});

gulp.task('default', ['watch']);

