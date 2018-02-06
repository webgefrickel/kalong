import path from 'path';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import svgsprite from 'gulp-svg-sprite';
import config from '../kalong';

const spriteConfig = {
  mode: {
    symbol: {
      dest: './',
      sprite: path.join('../', config.images, 'sprite.svg')
    }
  },

  shape: {
    meta: path.join(config.src, config.icons, 'sprite.yml'),
    id: {
      generator: 'icon--%s'
    }
  }
};

gulp.task('sprite', () =>
  gulp
    .src(path.join(config.src, config.icons, '*.svg'))
    .pipe(plumber())
    .pipe(svgsprite(spriteConfig))
    .pipe(gulp.dest(path.join(config.src, config.images)))
);
