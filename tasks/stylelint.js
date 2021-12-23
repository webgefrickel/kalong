import { join } from 'path';
import stylelint from 'stylelint';
import config from '../kalong.config';

export default async () => {
  const files = [join(config.src, config.styles, '**/*.scss'), join(config.src, config.patterns, '**/*.scss')];

  stylelint
    .lint({ configFile: '.stylelintrc.yml', files })
    .then(result => {
      if (result.errored) {
        const errors = result.results.filter(r => r.errored);
        let messages = '';

        errors.forEach(err => {
          err.warnings.forEach(w => {
            messages += `${err.source.replace(process.cwd(), '')} on line ${w.line}, column ${w.column}:\n`;
            messages += `${w.text}\n\n`;
          });
          err.invalidOptionWarnings.forEach(w => {
            messages += `${err.source.replace(process.cwd(), '')} on line ${w.line}, column ${w.column}:\n`;
            messages += `${w.text}\n\n`;
          });
        });

        if (messages !== '') {
          throw new Error(messages);
        }
      }
    })
    .catch(err => {
      throw new Error(err.stack);
    });
};
