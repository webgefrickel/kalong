import { join } from 'path';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import cssImport from 'postcss-import';
import { readFile, writeFile } from './lib/fs';
import warn from './lib/warn';
import config from '../kalong.config';

export default async (opts = {}) => {
  const options = {
    input: opts.input || join(config.dest, config.styles, `${config.main}.css`),
    sourceMap: opts.sourceMap === undefined,
    plugins: [
      cssImport(),
      autoprefixer({ browsers: opts.legacy ? config.browsers.legacy : config.browsers.modern }),
    ],
  };

  // add cssnano if the sourceMap option is set to false
  if (opts.sourceMap === false) {
    options.plugins.push(cssnano({ preset: 'default' }));
  }

  // if no output file is specified, use the input, overwriting same file
  options.output = opts.output || options.input;

  // TODO Refactor await
  return new Promise(resolve => {
    readFile(options.input).then(css => {
      postcss(options.plugins)
        .process(css, {
          from: options.input,
          to: options.output,
          map: options.sourceMap ? { inline: options.sourceMap } : false,
        })
        .then(result => {
          result.warnings().forEach(warn => {
            warn(warn.toString());
          });

          writeFile(options.output, result.css)
            .then(() => {
              resolve();
            })
            .catch(error => {
              warn(error);
            });
        })
        .catch(error => warn(error));
    });
  });
};
