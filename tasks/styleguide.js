import path from 'path';
import gulp from 'gulp';
import fractal from '@frctl/fractal';
import nunjucks from '@frctl/nunjucks';
import mandelbrot from '@frctl/mandelbrot';
import config from '../kalong.config';

const f = fractal.create();
const logger = f.cli.console;
const engine = nunjucks({
  filters: {},
  globals: {},
  extensions: {}
});
const theme = mandelbrot({
  favicon: '/favicon.ico',
  format: 'yaml',
  nav: [ 'docs', 'components' ],
  skin: 'black'
});
const collator = markup => `<div class="styleguide-pattern-wrapper">\n${markup}\n</div>\n`;

f.set('project.title', `${config.title}—Styleguide, v${config.version}`);
f.docs.set('path', path.join(config.src, config.docs));
f.docs.set('ext', '.md');
f.docs.set('default.status', 'draft');
f.docs.engine(engine);
f.web.set('static.path', path.join(config.dest));
f.web.set('builder.dest', path.join(config.styleguide));
f.web.theme(theme);
f.components.set('default.preview', '@preview');
f.components.set('default.status', 'prototype');
f.components.set('default.collated', true);
f.components.set('ext', '.html');
f.components.set('label', 'Patterns');
f.components.set('path', path.join(config.src, config.patterns));
f.components.set('default.collator', collator);
f.components.engine(engine);

gulp.task('styleguide:development', () => {
  const server = f.web.server({
    sync: true
  });

  server.on('error', err => logger.error(err.message));
  return server.start().then(() => {
    logger.success(`Fractal styleguide server is now running at ${server.url}`);
  });
});

gulp.task('styleguide:production', () => {
  const builder = f.web.builder();

  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
    logger.success('Fractal styleguide production build completed!');
  });
});
