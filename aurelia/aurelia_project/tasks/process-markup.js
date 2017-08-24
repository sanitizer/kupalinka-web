"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");
var changedInPlace = require("gulp-changed-in-place");
var project = require("../aurelia.json");
var aurelia_cli_1 = require("aurelia-cli");
function processMarkup() {
    return gulp.src(project.markupProcessor.source)
        .pipe(changedInPlace({ firstPass: true }))
        .pipe(htmlmin({
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
    }))
        .pipe(aurelia_cli_1.build.bundle());
}
exports.default = processMarkup;
