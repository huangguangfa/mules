'use strict';

const { series, src, dest } = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compile() {
    return src('./src/*.less')
        .pipe(less({
            // paths: [ path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(dest('./npm'));
}

function copyfont() {
    return src('./src/fonts/**')
        .pipe(cssmin())
        .pipe(dest('./npm/fonts'));
}

exports.build = series(compile, copyfont);
