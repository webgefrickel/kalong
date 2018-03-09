import path from 'path';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import eslint from 'gulp-eslint';
import sasslint from 'gulp-sass-lint';
import htmlhint from 'gulp-htmlhint';
import config from '../kalong.config';

const srcPathTasks = path.join(config.tasks, '/**/*.js');
const srcPathJs = path.join(config.src, config.scripts, '**/*.js');
const srcPathSass = path.join(config.src, config.styles, '**/*.scss');
const patternPathJs = path.join(config.src, config.patterns, '**/*.js');
const patternPathSass = path.join(config.src, config.patterns, '**/*.scss');

// JavaScript linting with eslint
gulp.task('lint:scripts:development', () =>
  gulp
    .src([ srcPathJs, patternPathJs, srcPathTasks ])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
);

gulp.task('lint:scripts:production', () =>
  gulp
    .src([ srcPathJs, patternPathJs, srcPathTasks ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

// Sass linting with sass-lint (js-version)
gulp.task('lint:styles:development', () =>
  gulp
    .src([ srcPathSass, patternPathSass ])
    .pipe(plumber())
    .pipe(sasslint())
    .pipe(sasslint.format())

);

gulp.task('lint:styles:production', () =>
  gulp
    .src([ srcPathSass, patternPathSass ])
    .pipe(sasslint())
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
);

gulp.task('lint:html', () =>
  gulp
    .src([
      path.join(config.styleguide, 'components/preview/*.html'),
      `!${path.join(config.styleguide, 'components/preview/*-start.html')}`,
      `!${path.join(config.styleguide, 'components/preview/*-end.html')}`,
      `!${path.join(config.styleguide, 'components/preview/*-start--*.html')}`,
      `!${path.join(config.styleguide, 'components/preview/*-end--*.html')}`
    ])
    .pipe(htmlhint({ htmlhintrc: '.htmlhintrc' }))
    .pipe(htmlhint.failReporter())
);
