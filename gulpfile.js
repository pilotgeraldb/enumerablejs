var gulp = require('gulp'); 
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var del = require("del");

gulp.task('build', ['js:minify']);

gulp.task('js:clean', function() 
{
    return del(['build']);
});

gulp.task('js', ['js:clean'], function() 
{
  return gulp.src('src/*.js')
    .pipe(concat('enumerable.js'))
    .pipe(gulp.dest('build/js'))
});

gulp.task('js:minify', ['js'], function() 
{
  return gulp.src('build/js/enumerable.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/js'))
});