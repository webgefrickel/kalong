import { join } from 'path';
import { ESLint } from 'eslint';
import config from '../kalong.config';

// export default async () =>
export default async () => {
  const eslint = new ESLint({ useEslintrc: true });
  const srcPathJs = join(config.src, config.scripts, '**/*.js');
  const taskPathJs = join('tasks/**/*.js');
  const patternPathJs = join(config.src, config.patterns, '**/*.js');
  const report = await eslint.lintFiles([taskPathJs, srcPathJs, patternPathJs]);

  if (report.length) {
    let messages = '';

    report.forEach(entry => {
      if (entry.errorCount > 0 || entry.fatalErrorCount > 0 || entry.warningCount > 0) {
        entry.messages.forEach(m => {
          messages += `${entry.filePath} on line ${m.line}, column ${m.column}:\n`;
          messages += `${m.ruleId}: ${m.message}\n\n`;
        });
      }
    });

    if (messages !== '') {
      throw new Error(messages);
    }
  }
};
