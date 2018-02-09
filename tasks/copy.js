import path from 'path';
import gulp from 'gulp';
import config from '../kalong.config';

gulp.task('copy:fonts', () =>
  gulp
    .src(path.join(config.src, config.fonts, '*.{woff,woff2}'))
    .pipe(gulp.dest(path.join(config.dest, config.fonts)))
);

gulp.task('copy:images', () =>
  gulp
    .src(path.join(config.src, config.images, '*.{png,gif,jpg,svg,webp}'))
    .pipe(gulp.dest(path.join(config.dest, config.images)))
);

gulp.task('copy:icons', () =>
  gulp
    .src(path.join(config.src, config.icons, '*.svg'))
    .pipe(gulp.dest(path.join(config.dest, config.images, config.icons)))
);

// TODO copy styleguide templates/partials for re-use in CMS
gulp.task('copy:styleguide', () =>
  gulp
    .src(path.join(config.src, 'icons/*.svg'))
    .pipe(gulp.dest(path.join(config.dest, 'img/icons')))
);
