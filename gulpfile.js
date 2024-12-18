/**
 *  Require ALL the things...we need to build our site.
 */

require('es6-promise').polyfill();
var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass')(require('sass')),
  compass = require('gulp-compass'),
  cleanCSS = require('gulp-clean-css'),
  prefix = require('gulp-autoprefixer'),
  cp = require('child_process'),
  uglify = require('gulp-uglify'),
  plumber = require('gulp-plumber'),
  gzip = require('gulp-gzip');

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
function jekyllBuild(done) {
  //browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build'], { stdio: 'inherit' }).on('close', done);
}

/**
 * Rebuild Jekyll & do page reload
 */
function jekyllRebuild(done) {
  jekyllBuild(done);
  browserSync.reload();
  done();
}

/**
 * Wait for jekyll-build, then launch the Server
 */
function browserSyncTask(done) {
  browserSync.init({
    notify: {
      styles: [
        'display: none; ',
        'padding: 6px 15px 3px;',
        'position: fixed;',
        'font-size: 0.8em;',
        'z-index: 9999;',
        'left: 0px;',
        'bottom: 0px;',
        'color: rgb(74, 74, 74);',
        'background-color: rgb(17, 17, 17);',
        'color: rgb(229, 229, 229);'
      ]
    },
    server: {
      baseDir: '_site'
    }
  });
  done();
}

/**
 * Compile files from assets/css into both _site/assets/css (for live injecting) and site (for future jekyll builds)
 */
function sassDeploy() {
  return gulp.src('assets/css/**/*.scss')
    .pipe(sass({
      includePaths: ['assets/css'],
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('assets/css'))
    .pipe(gulp.dest('_site/assets/css'));
}

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
function watchFiles() {
  gulp.watch('assets/sass/**', gulp.series(compassTask));
  gulp.watch('assets/js/dev/**', gulp.series(scripts));
  gulp.watch(['**.md', '**.html', '_layouts/**.html', '_includes/**.html', '_data/**', 'pages/**', 'assets/**.csv', 'assets/images/**','assets/js/**', '_cars/**'], gulp.series(jekyllRebuild));
}

// Compile Compass/SASS and Auto Prefix
function compassTask() {
  return gulp.src('assets/sass/**.scss')
    .pipe(plumber())
    .pipe(compass({
      css: 'assets/css',
      sass: 'assets/sass',
      image: 'assets/images',
      require: ['breakpoint', 'singularitygs', 'toolkit', 'breakpoint']
    }))
    .pipe(prefix({
      browsers: ['last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
    }))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest('_site/assets/css'));
}

// Minify CSS, Clean and Other Things
function minifyCSS() {
  return gulp.src('/assets/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist'));
}

// JS Script Tasks
function scripts() {
  return gulp.src('assets/js/dev/**.js')
    .pipe(plumber())
    .pipe(uglify())
    //.pipe(gzip())
    .pipe(gulp.dest('assets/js/prod/'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest('_site/assets/js/prod/'));
}

// Default task
gulp.task('default', gulp.series(jekyllBuild, gulp.parallel(browserSyncTask, watchFiles)));

// Deploy task
gulp.task('deploy', gulp.series(jekyllBuild, sassDeploy));
