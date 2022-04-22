'use strict';

const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compile() {
    return src('./src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(dest('./npm'));
}

// function copyfont() {
//     return src('./src/fonts/**')
//         .pipe(cssmin())
//         .pipe(dest('./npm/fonts'));
// }

function watchFile() {
    return watch(['./src/*.scss', './src/components/*.scss'], function (cb) {
        compile()
        cb();
    });
}

exports.build = series(compile);
exports.dev = series(watchFile);
