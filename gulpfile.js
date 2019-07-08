const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css')
const minify = require('gulp-minify');

gulp.task('default', defaultTask)

function defaultTask(done){
  
  done();
}

gulp.task('minify-css', function(done){
    gulp.src('./src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'))
  done()
});
gulp.task('minify-js', function(done){
    gulp.src('./src/js/*.js')
    .pipe(minify({
      ignoreFiles: ['*.min.js']
    }))
    .pipe(gulp.dest('dist/js/'))
  done()
});