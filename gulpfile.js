var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var addsrc = require('gulp-add-src');
var through = require('through2');
var duo = require("duo");
var del = require("del");
var webpack = require("webpack");
var gutil = require('gulp-util');

gulp.task('default', ['minify']);

gulp.task('clean', function() 
{
  return del(['build', 'coverage']);
});

gulp.task('pack', ['clean'], function(callback) 
{
  // run webpack
  webpack({
    entry: './src/enumerable.js',
    output: {
      path: __dirname + "/build/js",
      filename: 'enumerable.js',
      libraryTarget: 'umd',
      library: 'Enumerable'
    }
  }, function(err, stats) 
    {
      if(err)
      {
        throw new gutil.PluginError("webpack", err);
      }

      gutil.log("[webpack]", stats.toString({
        // output options
      }));

      callback();
    });
});

gulp.task('build', ['pack'], function() 
{
  return gulp.src('build/js/enumerable.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/js'));
});