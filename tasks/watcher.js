// TODO refactor to start -- use browsersync + bs.watch?
import { join } from 'path';
import chokidar from 'chokidar';
import runPostcss from './postcss';
import runSass from './sass';
import runSassLint from './sassLint';
import run from './lib/run';
import sassLint from './sassLint';
import eslint from './eslint';
import htmlhint from './htmlhint';
import clean from './clean';
import styles from './styles';
import scripts from './scripts';
import styleguide from './fractal';
import copy from './copy';
import sprite from './svgSprite';
import config from '../kalong.config';

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
