import { join } from 'path';
import stylelint from 'stylelint';
import warn from './lib/warn';
import config from '../kalong.config';

export default async () => {
  const files = [join(config.src, config.styles, '**/*.scss'), join(config.src, config.patterns, '**/*.scss')];

  stylelint
    .lint({ configFile: '.stylelintrc.yml', files, syntax: 'scss' })
    .then(result => {
      if (result.errored) {
        warn('\nstylelint found errors in the following files:');
        warn('==============================================\n');

        const errors = result.results.filter(r => r.errored);
        errors.forEach(err => {
          err.warnings.forEach(w => {
            warn(`${err.source.replace(process.cwd(), '')} on line ${w.line}, column ${w.column}:`);
            warn(`${w.text}\n`);
          });
          err.invalidOptionWarnings.forEach(w => {
            warn(`${err.source.replace(process.cwd(), '')} on line ${w.line}, column ${w.column}:`);
            warn(`${w.text}\n`);
          });
        });
      }
    })
    .catch(err => {
      console.error(err.stack);
    });
};
