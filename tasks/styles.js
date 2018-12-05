import path from 'path';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import browsersync from 'browser-sync';
// import globbing from 'node-sass-globbing';
import json from 'node-sass-json-importer';
import magic from 'node-sass-magic-importer';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import cssImport from 'postcss-import';
import config from '../kalong.config';

const srcPath = path.join(config.src, config.styles, 'main.scss');
const destPath = path.join(config.dest, config.styles);

// do not return anything fixes watch-task
gulp.task('styles:development', () => {
  gulp
    .src(srcPath)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        importer: [json(), magic()],
      })
    )
    .pipe(postcss([cssImport(), autoprefixer({ browsers: config.browserslist.default })]))
    .pipe(
      sourcemaps.write({
        sourceRoot: './',
      })
    )
    .pipe(gulp.dest(destPath))
    .pipe(browsersync.reload({ stream: true }));
});

gulp.task('styles:production', () => {
  gulp
    .src(srcPath)
    .pipe(
      sass({
        importer: [json(), magic()],
        sourceMap: false,
      })
    )
    .pipe(
      postcss([
        cssImport(),
        autoprefixer({ browsers: config.browserslist.default }),
        cssnano({
          safe: true,
        }),
      ])
    )
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(destPath));
});
