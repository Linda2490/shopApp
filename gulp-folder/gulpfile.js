//top level function (task, scr, dest, watch)
const gulp = require('gulp')
const gulpSass = require('gulp-sass')
const sass = gulpSass(require('sass'))

gulp.task('sass', async function(){
    gulp.src('index.scss').pipe(sass()).pipe(gulp.dest('css'))
})