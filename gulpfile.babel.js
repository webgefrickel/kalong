import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import run from 'run-sequence';
import config from './kalong';

// Rather than manage one giant gulpfile responsible for creating all tasks,
// each 'simple' task has been broken out into its own file in ./tasks.
// Any file in that folder gets automatically required.
// To add a new task, simply add a new task file to ./tasks
fs.readdirSync(config.tasks)
  .filter(name => (/(\.js$)/i).test(path.extname(name)))
  .forEach(task => require(config.tasks + task));

// The main tasks (default + build) are defined here
// ======================================================================

// The default gulp task is the watch task, watch everything
// from js to images and start the corresponding tasks
// The default task also starts watchify and browsersync
gulp.task('default', [ 'styleguide:development', 'serve' ], () => {
  // when something in the sass-folder changes, recompile sass
  gulp.watch(
    [ path.join(config.src, config.patterns, '**/*.scss'), path.join(config.src, config.styles, '**/*.scss') ],
    [ 'lint:styles:development', 'styles:development' ]
  );

  // any changes to the images-folder? copy them
  gulp.watch(
    path.join(config.src, config.images, '**/*.{png,gif,jpg,svg,webp}'),
    [ 'copy:images' ]
  );

  // if icons change, regenerate the sprite
  gulp.watch(
    path.join(config.src, config.icons, '**/*.{svg,yml}'),
    [ 'sprite', 'copy:icons' ]
  );

  // watch the javacsript folder for changes, then watchify and lint
  gulp.watch(
    [ path.join(config.src, config.patterns, '**/*.js'), path.join(config.src, config.scripts, '**/*.js') ],
    [ 'lint:scripts:development', 'scripts:development' ]
  );

  // add a watcher to the sericeworker script
  gulp.watch(
    [ path.join(config.src, config.scripts, 'serviceworker.js') ],
    [ 'lint:scripts:development', 'serviceworker' ]
  );

  // if any fonts change -- copy them
  gulp.watch(
    path.join(config.src, config.fonts, '**/*.{woff,woff2}'),
    [ 'copy:fonts' ]
  );
});

// the production build task runs almost any task in sequence
// and checks/lints - and fails if linting fails and is activated
// meaning you can't build if your code smells bad :-)
gulp.task('build', () => run(
  [ 'lint' ],
  [ 'clean' ],
  [ 'sprite', 'serviceworker',
    'styles:development', 'scripts:development',
    'styles:production', 'scripts:production', 'scripts:legacy' ],
  [ 'styleguide:production', 'copy:images', 'copy:fonts', 'copy:icons' ],
  [ 'clean:done' ]
));

