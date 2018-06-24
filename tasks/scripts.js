import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import { rollup } from 'rollup';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import strip from 'rollup-plugin-strip';
import json from 'rollup-plugin-json';
import { minify } from 'uglify-es';
import browsersync from 'browser-sync';
import config from '../kalong.config';

const babelConfig = {
  babelrc: false,
  presets: [
    [ 'env', {
      targets: { browsers: config.browserslist.default },
      modules: false
    } ]
  ],
  plugins: [ 'external-helpers', 'import-glob' ]
};

const babelConfigEs = {
  babelrc: false,
  presets: [
    [ 'env', {
      targets: { browsers: config.browserslist.legacy },
      modules: false
    } ]
  ],
  plugins: [ 'external-helpers', 'import-glob' ]
};

const walk = (dir, filter) => {
  const list = fs.readdirSync(dir);
  let results = [];

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath, filter));
    } else if (filePath.indexOf(filter) >= 0) {
      results.push(filePath);
    }
  });
  return results;
};

// prepare everything needed for the custom pattern/module resolver
const customResolve = () => {
  return {
    name: 'kalong-resolve',
    resolveId(importee) {
      if (importee.startsWith('#sharedconfig')) {
        return path.resolve(config.src, config.styles, '1-config/', 'shared.json');
      }
      if (importee.startsWith('#helper')) {
        return path.resolve(config.src, `${importee.replace('#helper', `${config.scripts}1-helpers`)}.js`);
      }
      if (importee.startsWith('#vendor')) {
        return path.resolve(config.src, `${importee.replace('#vendor', `${config.scripts}2-vendor`)}.js`);
      }
      if (importee.startsWith('#global')) {
        return path.resolve(config.src, `${importee.replace('#global', `${config.scripts}3-global`)}.js`);
      }
      if (importee.startsWith('#module')) {
        return path.resolve(config.src, `${importee.replace('#module', '../node_modules/')}.js`);
      }
      if (importee.startsWith('#pattern')) {
        const pattern = importee.split('/')[1];
        const searchResults = walk(path.join(config.src, config.patterns), `${pattern}.js`);

        if (searchResults.length === 1) {
          return path.resolve(searchResults[0]);
        }
      }
    }
  };
};

gulp.task('scripts:development', () =>
  rollup({
    input: path.join(config.src, config.scripts, 'main.js'),
    plugins: [
      customResolve(),
      json(),
      resolve(),
      commonjs(),
      babel(babelConfigEs)
    ]
  }).then(bundle => bundle.write({
    sourcemap: 'inline',
    format: 'iife',
    file: path.join(config.dest, config.scripts, 'main.js')
  }).then(() => {
    browsersync.reload();
  }))
);

gulp.task('scripts:production', () =>
  rollup({
    input: path.join(config.src, config.scripts, 'main.js'),
    plugins: [
      customResolve(),
      json(),
      resolve(),
      commonjs(),
      strip({ sourceMap: false }),
      babel(babelConfigEs),
      uglify({}, minify)
    ]
  }).then(bundle => bundle.write({
    sourcemap: false,
    format: 'iife',
    file: path.join(config.dest, config.scripts, 'main.min.js')
  }))
);

gulp.task('scripts:legacy', () =>
  rollup({
    input: path.join(config.src, config.scripts, 'main.legacy.js'),
    plugins: [
      customResolve(),
      json(),
      resolve(),
      commonjs(),
      strip({ sourceMap: false }),
      babel(babelConfig),
      uglify()
    ]
  }).then(bundle => bundle.write({
    sourcemap: false,
    format: 'iife',
    file: path.join(config.dest, config.scripts, 'main.legacy.min.js')
  }))
);

