// include gulp
var gulp = require('gulp'); 

// include plug-ins
var jsMinify = require('gulp-minify');

gulp.task('minify', ['js-minify']);

//js minify task
gulp.task('js-minify', function() {
  gulp.src('src/*.js')
    .pipe(jsMinify({
        ext:{
            src:'.js',
            min:'.min.js'
        }//,
        //exclude: ['tasks'],
        //ignoreFiles: ['.ignore.js', '-min.js']
    }))
    .pipe(gulp.dest('build/js'))
});