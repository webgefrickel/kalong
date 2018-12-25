import { join } from 'path';
import run from './lib/run';
import rollup from './rollup';
import copy from './copy';
import config from '../kalong.config';

const runScripts = () =>
  new Promise(resolve => {
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
    ]).then(() => {
      resolve();
    });
  });

runScripts();
export default runScripts;
