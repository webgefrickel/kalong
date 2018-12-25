import { join } from 'path';
import fractal from '@frctl/fractal';
import nunjucks from '@frctl/nunjucks';
import theme from 'kalong-frctl';
import warn from './lib/warn';
import config from '../kalong.config';

const fractalInstance = () => {
  const frctl = fractal.create();
  const engine = nunjucks({ paths: [`.${config.src}${config.patterns}`] });
  const collator = markup => `<div class="styleguide-pattern-wrapper">\n${markup}\n</div>\n`;

  frctl.set('project.title', `${config.title}—Styleguide, v${config.version}`);

  frctl.docs.engine(engine);
  frctl.docs.set('path', join(config.src, config.docs));
  frctl.docs.set('ext', '.md');
  frctl.docs.set('default.status', 'wip');
  frctl.docs.set('statuses', {
    wip: {
      label: 'Work in Progress',
      description: 'Almost done, subject to change',
      color: '#ed8015',
    },
    done: {
      label: 'Done',
      description: 'Ready to implement',
      color: '#2b9e0f',
    },
  });

  frctl.web.theme(theme());
  frctl.web.set('static.path', join(config.dest));
  frctl.web.set('builder.dest', join(config.styleguide));

  frctl.components.engine(engine);
  frctl.components.set('default.preview', '@preview');
  frctl.components.set('default.collated', true);
  frctl.components.set('ext', '.html');
  frctl.components.set('label', 'Patterns');
  frctl.components.set('path', join(config.src, config.patterns));
  frctl.components.set('default.collator', collator);
  frctl.components.set('default.status', 'prototype');
  frctl.components.set('statuses', {
    prototype: {
      label: 'Prototype',
      description: 'Do not implement',
      color: '#999999',
    },
    wip: {
      label: 'Work in Progress',
      description: 'Almost done, subject to change',
      color: '#ed8015',
    },
    done: {
      label: 'Done',
      description: 'Ready to implement',
      color: '#2b9e0f',
    },
    deprecated: {
      label: 'Deprecated',
      description: 'Old/outdated pattern, do not implement',
      color: '#f60045',
    },
  });

  return frctl;
};

const runFractal = async () => {
  const frctl = fractalInstance();
  const builder = frctl.web.builder();

  return new Promise(resolve => {
    builder.on('error', err => {
      warn(err.message);
    });
    return builder.build().then(() => {
      resolve();
    });
  });
};

export { fractalInstance }; // for develop task
export default runFractal;
