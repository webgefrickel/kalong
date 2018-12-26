import { join } from 'path';
import clean from './clean';
import copy from './copy';
import eslint from './eslint';
import htmlhint from './htmlhint';
import postcss from './postcss';
import rollup from './rollup';
import sass from './sass';
import sassLint from './sassLint';
import styleguide from './fractal';
import svgSprite from './svgSprite';
import run from './lib/run';
import config from '../kalong.config';

const scripts = async () =>
  Promise.all([
    run(rollup),
    run(rollup, {
      output: join(config.dest, config.scripts, `${config.main}.min.js`),
      sourceMap: false,
    }),
    run(rollup, {
      input: join(config.src, config.scripts, 'serviceworker.js'),
      output: join(config.root, `serviceworker.js`),
      sourceMap: false,
    }),
    run(copy, {
      input: join(config.src, config.scripts, `${config.main}.legacy.js`),
      output: join(config.dest, config.scripts),
    }),
  ]);

const styles = async () => {
  await Promise.all([
    run(sass),
    run(sass, {
      output: join(config.dest, config.styles, `${config.main}.min.css`),
      sourceMap: false,
    }),
  ]);
  await Promise.all([
    run(postcss),
    run(postcss, {
      output: join(config.dest, config.styles, `${config.main}.min.css`),
      sourceMap: false,
    }),
    run(postcss, {
      output: join(config.dest, config.styles, `${config.main}.legacy.css`),
      sourceMap: false,
      legacy: true,
    }),
  ]);
};

const preBuild = () => Promise.all([run(clean), run(sassLint), run(eslint)]);
const compileAssets = () => Promise.all([run(styles), run(scripts), run(svgSprite)]);

const copyAssets = () =>
  Promise.all([
    run(copy), // no options: copy images,
    run(copy, {
      // copy fonts
      input: join(config.src, config.fonts, '*.{woff,woff2}'),
      output: join(config.dest, config.fonts),
    }),
  ]);

const copyStyleguide = () =>
  // copy all styleguide files to the pattern library
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
  ]);

(async () => {
  await run(preBuild);
  await run(compileAssets);
  await run(copyAssets);
  await run(styleguide);
  await run(copyStyleguide);
  await run(htmlhint);
})();
