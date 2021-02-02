import { join } from 'path';
import { rollup } from 'rollup';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from 'rollup-plugin-terser';
import config from '../kalong.config';
import warn from './lib/warn';

export default async (opts = {}) => {
  const options = {
    input: opts.input || join(config.src, config.scripts, 'main.js'),
    plugins: [
      json(),
      nodeResolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        babelrc: false,
        presets: [['@babel/preset-env', { modules: false }]],
        plugins: ['import-glob', 'lodash'],
      }),
      opts.sourceMap === undefined ? null : terser.terser(),
    ],
  };

  try {
    const bundle = await rollup(options);
    bundle.write({
      sourcemap: opts.sourceMap === undefined ? 'inline' : opts.sourceMap,
      format: 'iife',
      file: opts.output || join(config.dest, config.scripts, 'main.js'),
    });
  } catch (error) {
    warn(error);
  }
};
