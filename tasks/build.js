import { join } from 'path';
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

const preBuild = () =>
  // before running any compile-tasks: clean output dirs and lint scss/js
  new Promise(resolve => {
    Promise.all([run(clean), run(sassLint), run(eslint)]).then(() => {
      resolve();
    });
  });

const compileAssets = () =>
  // compile/copy sass and javascript files and create the sprite
  new Promise(resolve => {
    Promise.all([run(styles), run(scripts), run(sprite)]).then(() => {
      resolve();
    });
  });

const copyAssets = () =>
  // copy fonts and images, the styleguide needs this before compiling
  new Promise(resolve => {
    Promise.all([
      run(copy), // no options: copy images,
      run(copy, {
        // copy fonts
        input: join(config.src, config.fonts, '*.{woff,woff2}'),
        output: join(config.dest, config.fonts),
      }),
    ]).then(() => {
      resolve();
    });
  });

const copyStyleguide = () =>
  // copy all styleguide files to the pattern library
  new Promise(resolve => {
    Promise.all([
      run(copy, {
        // styleguide HTML pattern files
        input: join(config.src, config.patterns, '**/*.html'),
        output: join(config.library),
        rename: [file => file.replace('_', '')],
      }),
      run(copy, {
        // styleguide data pattern files
        input: join(config.styleguide, 'components/data/**/*.html'),
        output: join(config.library),
        rename: [file => file.replace('_', ''), file => file.replace('.html', '.yml')],
      }),
    ]).then(() => {
      resolve();
    });
  });

const postBuild = () =>
  // run htmlhint after all html-files are generated/copied
  new Promise(resolve => {
    Promise.all([run(htmlhint)]).then(() => {
      resolve();
    });
  });

async function build() {
  await run(preBuild);
  await run(compileAssets);
  await run(copyAssets);
  await run(styleguide);
  await run(copyStyleguide);
  await run(postBuild);
}

build();
