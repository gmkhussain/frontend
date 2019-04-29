const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCss = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const pump = require('pump');
var sourcemaps = require('gulp-sourcemaps');
var minify = require('gulp-minify');

const minifyjs = require('gulp-js-minify');
const concat = require('gulp-concat');
const merge = require('merge-stream');


var log = require('fancy-log');
const lme = require('lme');


const srcPath = 'src';
const src = {
  scss: `${srcPath}/scss/main.scss`,
  html: `${srcPath}/**/*.html`,
  js: `${srcPath}/js/**/*.js`,
  img: `${srcPath}/images/**/*`,
}



// Dest set to docs for github pages, feel free to change
const destPath = 'build';
const dest = {
  css: `${destPath}/css`,
  html: destPath,
  js: `${destPath}/js`,
  img: `${destPath}/images`,

  css_bundle: `${destPath}/css/*.css`,
}



gulp.task('sass', () => {
  pump([
    gulp.src(src.scss),
    sourcemaps.init(),
    plumber(err => console.error(err)),
    sass({ style: 'compressed' }).on('error', sass.logError),
    autoprefixer({ browsers: ['last 2 versions'] }),
    minifyCss(),
    sourcemaps.write('./'),
    gulp.dest(dest.css),
    browserSync.stream({match: '**/*.css'})
  ]);
});
/*
gulp.task('html', () => {
  pump([
    gulp.src(src.html),
    plumber(err => console.error(err)),
    htmlmin({ collapseWhitespace: true, removeComments: true }),
    gulp.dest(dest.html)
  ]);
});

*/
gulp.task('js', () => {
  pump([
    gulp.src(src.js),
    plumber(err => console.error(err)),
    babel({ presets: ['es2015', 'es2017'] }),
    uglify(),
    gulp.dest(dest.js),
    browserSync.stream()
  ]);
});

gulp.task('image', () => {
  pump([
    gulp.src(src.img),
    plumber(err => console.error(err)),
    imagemin({ verbose: true }),
    gulp.dest(dest.img)
  ]);
}); 



// `gulp prod` CMD command
gulp.task('prod', function() {
 
  var css = gulp.src([`${srcPath}/css/bootstrap.min.css`, `${srcPath}/css/stylized.css`, `${srcPath}/css/swiper.min.css`, `${srcPath}/css/font-awesome.min.css`, `${srcPath}/scss/main.scss`])
  .pipe(sourcemaps.init())
  .pipe( plumber(err => console.error(err)) )
  .pipe( sass({ style: 'compressed' }).on('error', sass.logError) )
  .pipe( autoprefixer({ browsers: ['last 2 versions'] }) )
  .pipe(minifyCss())
  .pipe(concat('style.bundle.css'))
  .pipe(sourcemaps.write(`./`))
  .pipe(gulp.dest(`./${destPath}/css`))
  ;


  var headerjs = gulp.src([`${srcPath}/js/jquery-2.2.4.min.js`, `${srcPath}/js/lazysizes.min.js`])
    .pipe(sourcemaps.init())
    .pipe(concat('header.bundle1.js'))
  //  .pipe(minify())
  .pipe(sourcemaps.write(`./${destPath}`))
    .pipe(gulp.dest(`./${destPath}/js`));
  

  var footerjs = gulp.src([`${srcPath}/js/bootstrap.min.js`, `${srcPath}/js/kodeized.js`, `${srcPath}/js/viewportchecker.js`, `${srcPath}/js/swiper.jquery.min.js`, `${srcPath}/js/customized.js`])
      .pipe(concat('footer.bundle1.js'))
  //    .pipe(minify())
      .pipe(gulp.dest(`./${destPath}/js`));

      lme.h(" *** DONE ! *** ");
 
  return merge(headerjs, footerjs, css).on('change', browserSync.stream);

});



//gulp.task('browserSync', ['sass', 'js', 'html'], () => {
  gulp.task('browserSync', ['sass', 'prod'], () => {
    browserSync.init({
      injectChanges: true,
      server: `./${destPath}`,
  });
  

  //gulp.watch([dest.css_bundle, src.scss, src.js], ['sass', 'prod']);
  gulp.watch([src.scss], ['sass', 'prod']);
    //  gulp.watch(src.js, ['js']);
    //  gulp.watch(src.js).on('change', browserSync.stream);
    //  gulp.watch(src.html, ['html']);
    //  gulp.watch(src.html).on('change', browserSync.reload);
    //  gulp.watch(src.js).on('change', browserSync.reload);
  });



gulp.task('default', ['browserSync']);



// const webp = require('gulp-webp');

// imagemin(['images/*.{jpg,png}'], 'build/images', {	use: [		imageminWebp({quality: 50})	]}).then(() => {	console.log('Images optimized');});

gulp.task('webp', () =>
  gulp.src([`${destPath}/images/**/*`])
  .pipe(webp())
  .pipe(gulp.dest(`./${destPath}/images-webp`))
);


