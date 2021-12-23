import process from 'process';
import { join } from 'path';
import browserSync from 'browser-sync';
import chokidar from 'chokidar';
import copy from './copy';
import eslint from './eslint';
import { fractalInstance } from './fractal';
import postcss from './postcss';
import rollup from './rollup';
import sass from './sass';
import sprite from './sprite';
import stylelint from './stylelint';
import config from '../kalong.config';

process.on('uncaughtException', error => {
  // if we find an error, we output it in the terminal in red
  // and do not exit with exit-code 1, keep the watcher running
  console.log('\x1b[31m%s\x1b[0m', error);
});

const server = browserSync({
  https: config.https,
  proxy: {
    target: `${config.https ? 'https' : 'http'}://${config.proxy}`,
  },
  port: config.port,
  open: false, // Dont open the browser on start
  notify: false, // Hide that info-popup from browsersync
});

const fractalServer = fractalInstance().web.server({ sync: true });
fractalServer.on('error', error => { throw new Error(error); });
fractalServer.start().then(() => {
  console.log(`Fractal styleguide server is now running at ${fractalServer.url}`);
});

const watchSwitch = async file => {
  const fileExtension = file.substr(file.lastIndexOf('.') + 1);
  const isServiceworker = file.indexOf('serviceworker') > -1;
  const isSprite = file.indexOf('sprite.svg') > -1;

  if (!isServiceworker) {
    switch (fileExtension) {
      case 'scss':
        console.log('Linting and Rebuilding scss/postcss...');
        await stylelint();
        await sass();
        await postcss();
        server.reload(`/${config.assets}${config.styles}${config.main}.css`);
        break;

      case 'js':
        console.log('Linting and Rebuilding js...');
        await eslint();
        await rollup();
        server.reload(`/${config.assets}${config.scripts}${config.main}.js`);
        break;

      case 'json':
        console.log('JSON change detected: Rebuilding sass and js...');
        await rollup();
        await sass();
        await postcss();
        server.reload();
        break;

      case 'woff':
      case 'woff2':
        console.log('Copying fonts...');
        await copy({
          input: join(config.src, config.fonts, '*.{woff,woff2}'),
          output: join(config.dest, config.fonts),
        });
        server.reload();
        break;

      case 'svg':
        if (!isSprite) {
          console.log('Rebuilding sprite...');
          await sprite();
          await copy();
          server.reload();
        }

        break;

      case 'png':
      case 'gif':
      case 'jpg':
      case 'webp':
        console.log('Copying images...');
        await copy();
        server.reload();
        break;

      default:
        console.log('Reloading...');
        server.reload();
        break;
    }
  }

  // Special case: serviceworker
  if (isServiceworker) {
    await rollup({
      input: join(config.src, config.scripts, 'serviceworker.js'),
      output: join(config.root, '.well-known/', 'serviceworker.js'),
      sourceMap: false,
    });
    server.reload();
  }
};

const watch = async () => {
  const watcher = chokidar.watch(`${config.src.replace('./', '')}**/*`, {
    ignored: /(?<empty>^|[/\\])\../,
  });

  watcher.on('ready', () => {
    watcher.on('add', file => watchSwitch(file));
    watcher.on('unlink', file => watchSwitch(file));
    watcher.on('change', file => watchSwitch(file));
  });
};

(async () => {
  await watch();
})();
