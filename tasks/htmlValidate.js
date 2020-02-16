import { join } from 'path';
import { sync } from 'glob';
import { HtmlValidate, Reporter } from 'html-validate';
import warn from './lib/warn';
import config from '../kalong.config';

export default async () => {
  const htmlvalidate = new HtmlValidate();
  const pagePath = join(config.src, config.patterns, '5-templates');
  const pages = sync(join(pagePath, '*'));
  const reports = [];

  pages.forEach(async page => {
    const fileId = page.replace(pagePath, '');
    const file = sync(join(config.styleguide, 'components/preview/', fileId) + '.html')[0];

    // ignore files that end with -start.html or -end.html
    if (file.indexOf('-start.html') === -1 && file.indexOf('-end.html') === -1) {
      reports.push(htmlvalidate.validateFile(file));
    }
  });

  const merged = Reporter.merge(reports);
  if (!merged.valid) {
    warn('\nhtml-validate found errors in the following files:');
    warn('==================================================\n');

    merged.results.forEach(r => {
      warn(`${r.filePath}, ${r.errorCount} errors and ${r.warningCount} warnings:\n`);
      r.messages.forEach(m => {
        warn(`On line ${m.line}, column ${m.column}:`);
        warn(`${m.message}\n${m.selector}\n`);
      });
    });
  }
};
