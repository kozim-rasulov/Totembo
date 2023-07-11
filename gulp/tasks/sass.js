module.exports = () => {
  $.gulp.task('style', () => 
    $.gulp.src($.path.src.css)
    // .pipe($.gp.sourcemaps.init())
    .pipe($.sass({ outputStyle: 'expanded' })) 
    .pipe($.gp.autoprefixer())
    .pipe($.gp.groupCssMediaQueries())
    // .pipe($.gp.sourcemaps.write("."))
    .pipe($.gulp.dest($.path.build.css))
    .pipe($.sass({ outputStyle: 'compressed' })) // Сжимаем css
    .pipe($.gp.rename({
      suffix: ".min", //дополнеие после имени файла
      }
    ))
    .pipe($.gulp.dest($.path.build.css)).on('end', $.bs.reload)
  )
}