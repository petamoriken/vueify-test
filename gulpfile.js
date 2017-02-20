const gulp = require("gulp");

const fs = require("fs");

const browserify = require("browserify");
const vueify = require("vueify");
const envify = require("envify");

// postcss
const cssnext = require("postcss-cssnext");
const cssimport = require("postcss-import");

vueify.compiler.applyConfig({
    postcss: [cssimport(), cssnext()]
});

gulp.task("js", function() {
    return browserify("src/main.js")
        .transform(vueify)
        .transform(envify)
        .bundle()
        .pipe(fs.createWriteStream("build/main.js"));
});