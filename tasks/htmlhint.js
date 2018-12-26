import { join } from 'path';
import { HTMLHint } from 'htmlhint';
import { sync } from 'glob';
import { readFile } from './lib/fs';
import warn from './lib/warn';
import config from '../kalong.config';

export default async () => {
  return new Promise(resolve => {
    const files = sync(join(config.styleguide, 'components/preview/*.html'));

    // TODO Refactor await async
    // read the htmlhint config file, and then proceed
    readFile('.htmlhintrc').then(rc => {
      files.forEach(file => {
        // ignore files that end with -start.html or -end.html
        if (file.indexOf('-start.html') === -1 && file.indexOf('-end.html') === -1) {
          readFile(file).then(html => {
            const messages = HTMLHint.verify(html, JSON.parse(rc));

            if (messages.length) {
              warn('htmlhint found errors in the following files:');
              warn('==============================================');
              messages.forEach(m => {
                warn(`${file} on line ${m.line}, column ${m.col}:`);
                warn(`${m.rule.id}: ${m.message}\n`);
              });
            }
          });
        }
      });
    });

    resolve();
  });
};
