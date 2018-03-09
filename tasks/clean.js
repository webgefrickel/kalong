import path from 'path';
import gulp from 'gulp';
import del from 'del';
import config from '../kalong.config';

// do not return anything fixes watch-task
gulp.task('clean', () => del([
  path.join(config.root, 'serviceworker.js'),
  path.join(config.dest, config.styles, '**/*'),
  path.join(config.dest, config.scripts, '**/*'),
  path.join(config.dest, config.images, '**/*'),
  path.join(config.dest, config.fonts, '**/*'),
  path.join(config.library, '**/*')
]));
