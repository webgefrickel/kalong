// TODO
// gulp.task('styleguide:development', () => {
//   const server = frctl.web.server({ sync: true });

//   server.on('error', err => logger.error(err.message));
//   return server.start().then(() => {
//     logger.success(`Fractal styleguide server is now running at ${server.url}`);
//   });
// });

import { join } from 'path';
import browserSync from 'browser-sync';
import chokidar from 'chokidar';
import sass from './sass';
import sassLint from './sassLint';
import postcss from './postcss';
import run from './lib/run';
import warn from './lib/warn';
import config from '../kalong.config';

const server = browserSync({
  proxy: config.proxy,
  port: config.port,
  open: false, // dont open the browser on start
  notify: false, // hide that info-popup from browsersync
});

const watchSwitch = async file => {
  const fileExtension = file.substr(file.lastIndexOf('.') + 1);
  console.log(file, 'file changed');
  console.log(fileExtension, 'file extension');

  switch (fileExtension) {
    case 'scss':
      try {
        await run(sassLint);
        await run(sass);
        await run(postcss);
        server.reload(`/${config.assets}${config.styles}${config.main}.css`);
      } catch (error) {
        warn(error);
      }
      break;
    default:
      // do nothing
      break;
  }
};

const watch = async () => {
  const watcher = chokidar.watch(config.src, { ignored: /(^|[/\\])\../ });
  console.log(server);

  watcher.on('ready', () => {
    console.log(`Watching files in ${config.src}…`);
    watcher.on('add', watchSwitch);
    watcher.on('unlink', watchSwitch);
    watcher.on('change', watchSwitch);
  });
};

const develop = () => {
  watch();
};

develop();
