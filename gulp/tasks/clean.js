module.exports = ()=> {
  $.gulp.task('clean', () => 
      $.del($.path.clean)
  )
}
