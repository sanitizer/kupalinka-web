"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp = require("gulp");
var changedInPlace = require("gulp-changed-in-place");
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");
var notify = require("gulp-notify");
var rename = require("gulp-rename");
var ts = require("gulp-typescript");
var project = require("../aurelia.json");
var aurelia_cli_1 = require("aurelia-cli");
var eventStream = require("event-stream");
function configureEnvironment() {
    var env = aurelia_cli_1.CLIOptions.getEnvironment();
    return gulp.src("aurelia_project/environments/" + env + ".ts")
        .pipe(changedInPlace({ firstPass: true }))
        .pipe(rename('environment.ts'))
        .pipe(gulp.dest(project.paths.root));
}
var typescriptCompiler = typescriptCompiler || null;
function buildTypeScript() {
    typescriptCompiler = ts.createProject('tsconfig.json', {
        "typescript": require('typescript')
    });
    var dts = gulp.src(project.transpiler.dtsSource);
    var src = gulp.src(project.transpiler.source)
        .pipe(changedInPlace({ firstPass: true }));
    return eventStream.merge(dts, src)
        .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
        .pipe(sourcemaps.init())
        .pipe(typescriptCompiler())
        .pipe(aurelia_cli_1.build.bundle());
}
exports.default = gulp.series(configureEnvironment, buildTypeScript);
