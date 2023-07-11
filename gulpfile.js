global.$ = { 
  gulp: require('gulp'),
  gp: require("gulp-load-plugins")(),
  bs: require('browser-sync').create(),
  sass: require('gulp-sass')(require('sass')),
  del: require('del'),
  path: { 
    serverDir:  "./app/build",
    clean: './app/build/**',
    build: {
      html:   "./app/build/",
      css:  "./app/build/css/",
      js: 	"./app/build/js/",
      img:	"./app/build/img/",
      fonts:  "./app/build/fonts/"
    },
    src: {
      html: './app/src/*.{html,pug,jade}',
      css: './app/src/css/*.*',
      img: './app/src/img/**/*.{png,jpg,gif,svg}',
      fonts: './app/src/fonts/**/*.*',
      js: './app/src/js/common.js'
    },
    watch: {
      html: ['./app/src/*.{html,pug,jade}', './app/src/view/**/*.{html,pug,jade}'],
      img: './app/src/img/**/*.{png,jpg,gif,svg}',
      fonts: './app/src/fonts/**/*.*',
      style: './app/src/css/**/*.*',
      js: './app/src/js/**/*.*',
    },
    tasks: require('./gulp'),
  },
  tasksList: {
    default:  ['html', 'style', 'js', 'img', 'fonts', 'watch', 'server'],
    build: ['html', 'style', 'js', 'img', 'fonts']
  }

}
$.path.tasks.forEach(taskPath => { 
  typeof require(taskPath) == "function" ? require(taskPath)() : "" 
});

$.gulp.task('build', $.gulp.parallel($.tasksList.build))
$.gulp.task('default', $.gulp.series("clean", $.gulp.parallel(...$.tasksList.default)))

console.log($.del);