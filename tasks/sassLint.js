const path = require('path');
const sassLint = require('sass-lint');
const warn = require('./lib/warn');
const config = require('../kalong.config');

const runSassLint = (opts = {}) => {
  const options = Object.assign(
    {
      files: path.join(config.src, config.styles, `${config.patterns}}**/*.scss`),
      configFile: '.sass-lint.yml',
      failOnError: false,
    },
    opts
  );
  const report = sassLint.lintFiles(options.files, {}, options.configFile);

  if (report.length) {
    report.forEach(file => {
      if (file.errorCount || file.warningCount) {
        warn('sass-lint found errors in the following files:');
        warn('==============================================');

        file.messages.forEach(m => {
          warn(`${file.filePath} on line ${m.line}, column ${m.column}:`);
          warn(`${m.ruleId}: ${m.message}\n`);
        });
      }
    });
  }
};

module.exports = runSassLint;
