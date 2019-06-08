

const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const browserSync  = require('browser-sync');

gulp.task('pug-compile', ()=>{
  return gulp.src(['src/pug/**/*.pug', '!src/pug/includes/**/*.pug'])
    .pipe(pug({pretty:true}))
    .pipe(gulp.dest('src'))
});

gulp.task('sass', () => {
  return gulp.src('src/sass/main.scss') 
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('src/css'))
});

gulp.task('browser-sync', () => {
  return browserSync({
    server: {
      baseDir: 'src'
    },
    notify: false
  });
});


gulp.task('watch', ['pug-compile', 'sass'], ()=>{
  gulp.watch('src/**/*.pug', ['pug-compile', browserSync.reload]);
  gulp.watch('src/**/*.scss', ['sass', browserSync.reload]); 
});

