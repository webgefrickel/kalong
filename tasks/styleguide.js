import path from 'path';
import gulp from 'gulp';
import fractal from '@frctl/fractal';
import nunjucks from '@frctl/nunjucks';
import theme from 'kalong-frctl';
import config from '../kalong.config';

const frctl = fractal.create();
const logger = frctl.cli.console;
const engine = nunjucks({ paths: ['../src/patterns/'] });
const collator = markup => `<div class="styleguide-pattern-wrapper">\n${markup}\n</div>\n`;

frctl.set('project.title', `${config.title}—Styleguide, v${config.version}`);

frctl.docs.engine(engine);
frctl.docs.set('path', path.join(config.src, config.docs));
frctl.docs.set('ext', '.md');
frctl.docs.set('default.status', 'wip');
frctl.docs.set('statuses', {
  wip: { label: 'Work in Progress', description: 'Almost done, subject to change', color: '#ed8015' },
  done: { label: 'Done', description: 'Ready to implement', color: '#2b9e0f' },
});

frctl.web.theme(theme());
frctl.web.set('static.path', path.join(config.dest));
frctl.web.set('builder.dest', path.join(config.styleguide));

frctl.components.engine(engine);
frctl.components.set('default.preview', '@preview');
frctl.components.set('default.collated', true);
frctl.components.set('ext', '.html');
frctl.components.set('label', 'Patterns');
frctl.components.set('path', path.join(config.src, config.patterns));
frctl.components.set('default.collator', collator);
frctl.components.set('default.status', 'prototype');
frctl.components.set('statuses', {
  prototype: { label: 'Prototype', description: 'Very rough, do not implement', color: '#999999' },
  wip: { label: 'Work in Progress', description: 'Almost done, subject to change', color: '#ed8015' },
  done: { label: 'Done', description: 'Ready to implement', color: '#2b9e0f' },
  deprecated: { label: 'Deprecated', description: 'Old pattern, do not implement', color: '#f60045' },
});

gulp.task('styleguide:development', () => {
  const server = frctl.web.server({ sync: true });

  server.on('error', err => logger.error(err.message));
  return server.start().then(() => {
    logger.success(`Fractal styleguide server is now running at ${server.url}`);
  });
});

gulp.task('styleguide:production', () => {
  const builder = frctl.web.builder();

  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
    logger.success('Fractal styleguide production build completed!');
  });
});
