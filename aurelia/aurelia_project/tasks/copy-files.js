"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp = require("gulp");
var path = require("path");
var minimatch = require("minimatch");
var changedInPlace = require("gulp-changed-in-place");
var project = require("../aurelia.json");
function copyFiles(done) {
    if (typeof project.build.copyFiles !== 'object') {
        done();
        return;
    }
    var instruction = getNormalizedInstruction();
    var files = Object.keys(instruction);
    return gulp.src(files)
        .pipe(changedInPlace({ firstPass: true }))
        .pipe(gulp.dest(function (x) {
        var filePath = prepareFilePath(x.path);
        var key = files.find(function (f) { return minimatch(filePath, f); });
        return instruction[key];
    }));
}
exports.default = copyFiles;
function getNormalizedInstruction() {
    var files = project.build.copyFiles;
    var normalizedInstruction = {};
    for (var key in files) {
        normalizedInstruction[path.posix.normalize(key)] = files[key];
    }
    return normalizedInstruction;
}
function prepareFilePath(filePath) {
    var preparedPath = filePath.replace(process.cwd(), '').substring(1);
    //if we are running on windows we have to fix the path
    if (/^win/.test(process.platform)) {
        preparedPath = preparedPath.replace(/\\/g, '/');
    }
    return preparedPath;
}
