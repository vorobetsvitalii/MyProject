const { src, dest } = require("gulp");

const path = require("../config/path.js");
const app = require("../config/app.js");
// плагіни
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
const webpack = require("webpack-stream");


const js = () => {
    return src(path.js.src, { sourcemaps: true })
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "JS",
                message: error.message
            }))
        }))
        .pipe(babel())
        .pipe(webpack(app.webpack))
        .pipe(dest(path.js.dest), { sourcemaps: true });
}

module.exports = js;