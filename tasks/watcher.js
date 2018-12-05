const chokidar = require('chokidar');
const config = require('../kalong.config');
const runPostcss = require('./postcss');
const runSass = require('./sass');
const runSassLint = require('./sassLint');

const watcher = chokidar.watch(config.src, { ignored: /(^|[/\\])\../ });
const watchSwitch = path => {
  const fileExtension = path.substr(path.lastIndexOf('.') + 1);

  switch (fileExtension) {
    case 'scss':
      runSassLint();
      runSass();
      runPostcss();
      break;
    default:
      // do nothing
      break;
  }
};

watcher.on('ready', () => {
  console.log(`Watching files in ${config.src}…`);
  watcher.on('add', watchSwitch);
  watcher.on('addDir', watchSwitch);
  watcher.on('change', watchSwitch);
});
