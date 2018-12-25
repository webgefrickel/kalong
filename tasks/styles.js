import { join } from 'path';
import run from './lib/run';
import sass from './sass';
import postcss from './postcss';
import config from '../kalong.config';

const runStyles = () =>
  new Promise(resolve => {
    Promise.all([
      run(sass),
      run(sass, {
        output: join(config.dest, config.styles, `${config.main}.min.css`),
        sourceMap: false,
      }),
    ]).then(() => {
      Promise.all([
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
      ]).then(() => {
        resolve();
      });
    });
  });

export default runStyles;
