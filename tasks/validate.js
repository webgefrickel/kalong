import { join } from 'path';
import { sync } from 'glob';
import { HtmlValidate, FileSystemConfigLoader, Reporter } from 'html-validate';
import config from '../kalong.config';

export default async () => {
  const loader = new FileSystemConfigLoader();
  const htmlvalidate = new HtmlValidate(loader);
  const pagePath = join(config.src, config.patterns, '5-templates');
  const pages = sync(join(pagePath, '*'));
  const reports = [];

  pages.forEach(async page => {
    const fileId = page.replace(pagePath, '');
    const file = sync(`${join(config.styleguide, `components/preview/${fileId}`)}.html`)[0];

    // ignore files that end with -start.html or -end.html
    if (file.indexOf('-start.html') === -1 && file.indexOf('-end.html') === -1) {
      reports.push(htmlvalidate.validateFile(file));
    }
  });

  const merged = Reporter.merge(reports);
  if (!merged.valid) {
    let messages = '';

    merged.results.forEach(r => {
      messages += `${r.filePath}, ${r.errorCount} errors and ${r.warningCount} warnings:\n`;

      r.messages.forEach(m => {
        messages += `On line ${m.line}, column ${m.column}:\n`;
        messages += `${m.message}\n${m.selector}\n`;
      });
    });

    if (messages !== '') {
      throw new Error(messages);
    }
  }
};
