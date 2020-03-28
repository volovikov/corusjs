var gulp = require('gulp'),
    uglify = require('gulp-uglify-es').default,
    sass = require('gulp-sass'),
    lr = require('tiny-lr'),
    connect = require('connect'), 
    server = lr();


gulp.task('minify', function () {
  gulp.src('practic4.js')
      .pipe(uglify())
      .pipe(gulp.dest('build'))
});
gulp.task('sass', function() {
  gulp.src('./css/*.css')
    .pipe(sass())
    .pipe(gulp.dest('build'))
});
gulp.task('run', gulp.parallel('sass', 'minify'));

gulp.task('start', gulp.series('sass', 'minify'));

gulp.task('http-server', function() {
    connect()
        .use(require('connect-livereload')())
        //.use(connect.static('./public'))
        .listen('9000');

    console.log('Server listening on http://localhost:9000');
});
gulp.task('watch', function() {
  gulp.series('sass', 'minify');

  server.listen(35729, function(err) {
    gulp.watch('./css/*.css', gulp.series(['sass']));
  });
})
gulp.task('launch', gulp.series('http-server', 'watch'));
