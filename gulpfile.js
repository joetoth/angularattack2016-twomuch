const gulp = require('gulp');

var jspm = require('gulp-jspm-build');
gulp.task("b", function () {
return jspm({
    bundleOptions: {
        minify: true,
        mangle: false
    },
    bundleSfx: true,
    bundles: [
        { src: './app/main.js', dst: 'main.min.js' }
    ]
})
.pipe(gulp.dest('./dist/'));


});

 gulp.task("dist", function () {
var path = require("path");
var Builder = require('systemjs-builder');
 
// optional constructor options 
// // sets the baseURL and loads the configuration file 
 var builder = new Builder('.', 'systemjs.config.js');
  builder
  .bundle('app/main.js', 'app/app.js')
 .then(function() {
    console.log('Build complete');
    })
    .catch(function(err) {
      console.log('Build error');
        console.log(err);
        });

 });
