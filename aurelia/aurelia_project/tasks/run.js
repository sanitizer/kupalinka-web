"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp = require("gulp");
var browserSync = require("browser-sync");
var historyApiFallback = require("connect-history-api-fallback/lib");
var project = require("../aurelia.json");
var build_1 = require("./build");
var aurelia_cli_1 = require("aurelia-cli");
function onChange(path) {
    console.log("File Changed: " + path);
}
function reload(done) {
    browserSync.reload();
    done();
}
var serve = gulp.series(build_1.default, function (done) {
    browserSync({
        online: false,
        open: false,
        port: 9000,
        logLevel: 'silent',
        server: {
            baseDir: [project.platform.baseDir],
            middleware: [historyApiFallback(), function (req, res, next) {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    next();
                }]
        }
    }, function (err, bs) {
        if (err)
            return done(err);
        var urls = bs.options.get('urls').toJS();
        console.log("Application Available At: " + urls.local);
        console.log("BrowserSync Available At: " + urls.ui);
        done();
    });
});
var refresh = gulp.series(build_1.default, reload);
var watch = function (refreshCb, onChangeCb) {
    return function (done) {
        gulp.watch(project.transpiler.source, refreshCb).on('change', onChangeCb);
        gulp.watch(project.markupProcessor.source, refreshCb).on('change', onChangeCb);
        gulp.watch(project.cssProcessor.source, refreshCb).on('change', onChangeCb);
        gulp.watch(project.localesProcessor.source, refresh).on('change', onChange);
        //see if there are static files to be watched
        if (typeof project.build.copyFiles === 'object') {
            var files = Object.keys(project.build.copyFiles);
            gulp.watch(files, refreshCb).on('change', onChangeCb);
        }
    };
};
exports.watch = watch;
var run;
exports.default = run;
if (aurelia_cli_1.CLIOptions.hasFlag('watch')) {
    exports.default = run = gulp.series(serve, watch(refresh, onChange));
}
else {
    exports.default = run = serve;
}
