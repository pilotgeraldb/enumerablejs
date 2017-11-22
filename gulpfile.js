var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var addsrc = require('gulp-add-src');
var through = require('through2');
var duo = require("duo");
var del = require("del");

gulp.task('build', ['compile']);

gulp.task('clean', function() 
{
  return del(['build', 'components', 'duo']);
});

gulp.task('compile', ['clean'], function() 
{
  return gulp.src('src/enumerable.js')
    .pipe(through.obj(function(file, enc, fn)
    {
      var _duo = new duo(__dirname);

      _duo.entry(file.path)
          .standalone('enumerablejs')
          .run(function(err, src)
          {
            if(err) 
            {
              return fn(err);
            }
            // console.log(typeof(src));
            // console.log(Object.keys(src));
            // console.log(typeof(src.code));
            file.contents = new Buffer(src.code, 'utf8');

            fn(null, file);
          });
    }))
    .pipe(gulp.dest('build/js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/js'));

});

// gulp.task('minify', ['compile'], function() 
// {
//   var stream = gulp.src('duo/src/enumerable.js')
//     .pipe(uglify())
//     .pipe(rename({ suffix: '.min' }))
//     .pipe(gulp.dest('build/js'));

//     return stream;
// });