// TODO
// gulp.task('styleguide:development', () => {
//   const server = frctl.web.server({ sync: true });

//   server.on('error', err => logger.error(err.message));
//   return server.start().then(() => {
//     logger.success(`Fractal styleguide server is now running at ${server.url}`);
//   });
// });
//
//
// gulp.task('default', ['styleguide:development', 'serve'], () => {
//   // when something in the sass-folder changes, recompile sass
//   gulp.watch(
//     [
//       path.join(config.src, config.patterns, '**/*.scss'),
//       path.join(config.src, config.styles, '**/*.scss'),
//     ],
//     ['lint:styles:development', 'styles:development']
//   );

//   // any changes to the images-folder? copy them
//   gulp.watch(
//     path.join(
//       config.src,
//       config.images,
//       '**/*.{png,gif,jpg,svg,webp,ico}'
//     ),
//     ['copy:images']
//   );

//   // if icons change, regenerate the sprite
//   gulp.watch(path.join(config.src, config.icons, '**/*.{svg,yml}'), [
//     'sprite',
//     'copy:icons',
//   ]);

//   // watch the javacsript folder for changes, then watchify and lint
//   gulp.watch(
//     [
//       path.join(config.src, config.patterns, '**/*.js'),
//       path.join(config.src, config.scripts, '**/*.js'),
//     ],
//     ['lint:scripts:development', 'scripts:development']
//   );

//   // add a watcher to the sericeworker script
//   gulp.watch(
//     [path.join(config.src, config.scripts, 'serviceworker.js')],
//     ['lint:scripts:development', 'serviceworker']
//   );

//   // if any fonts change -- copy them
//   gulp.watch(path.join(config.src, config.fonts, '**/*.{woff,woff2}'), [
//     'copy:fonts',
//   ]);
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
  watcher.on('ready', () => {
    watcher.on('add', watchSwitch);
    watcher.on('unlink', watchSwitch);
    watcher.on('change', watchSwitch);
  });
};

(async () => {
  await watch();
})();
