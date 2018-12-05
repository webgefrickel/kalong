import path from 'path';
import gulp from 'gulp';
import rename from 'gulp-rename';
import flatten from 'gulp-flatten';
import config from '../kalong.config';

gulp.task('copy:fonts', () =>
  gulp.src(path.join(config.src, config.fonts, '*.{woff,woff2}')).pipe(gulp.dest(path.join(config.dest, config.fonts)))
);

gulp.task('copy:images', () =>
  gulp
    .src(path.join(config.src, config.images, '*.{png,gif,jpg,svg,webp,ico}'))
    .pipe(gulp.dest(path.join(config.dest, config.images)))
);

gulp.task('copy:icons', () =>
  gulp
    .src(path.join(config.src, config.icons, '*.svg'))
    .pipe(gulp.dest(path.join(config.dest, config.images, config.icons)))
);

gulp.task('copy:styleguide:patterns', () =>
  gulp
    .src(path.join(config.src, config.patterns, '**/*.html'))
    .pipe(flatten())
    .pipe(
      rename(f => {
        f.basename = f.basename.replace('_', '');
      })
    )
    .pipe(gulp.dest(path.join(config.library)))
);

gulp.task('copy:styleguide:data', () =>
  gulp
    .src(path.join(config.styleguide, 'components/data/**/*.html'))
    .pipe(
      rename(f => {
        f.basename = f.basename.replace('_', '');
        f.extname = '.yml';
      })
    )
    .pipe(gulp.dest(path.join(config.library)))
);
