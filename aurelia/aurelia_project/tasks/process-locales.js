"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp_1 = require("gulp");
var gulp_changed_in_place_1 = require("gulp-changed-in-place");
var aurelia_json_1 = require("../aurelia.json");
var aurelia_cli_1 = require("aurelia-cli");
function processLocales() {
    return gulp_1.default.src(aurelia_json_1.default.localesProcessor.source)
        .pipe(gulp_changed_in_place_1.default({ firstPass: true }))
        .pipe(aurelia_cli_1.build.bundle());
}
exports.default = processLocales;
