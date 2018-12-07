const fs = require('fs');
const path = require('path');
const rollup = require('rollup');
const json = require('rollup-plugin-json');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const terser = require('rollup-plugin-terser');
const config = require('../kalong.config');

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
      if (importee.startsWith('~config')) {
        return path.resolve(config.src, `${importee.replace('~config/', config.config)}.json`);
      }
      if (importee.startsWith('~helper')) {
        return path.resolve(config.src, `${importee.replace('~helper', `${config.scripts}1-helpers`)}.js`);
      }
      if (importee.startsWith('~vendor')) {
        return path.resolve(config.src, `${importee.replace('~vendor', `${config.scripts}2-vendor`)}.js`);
      }
      if (importee.startsWith('~global')) {
        return path.resolve(config.src, `${importee.replace('~global', `${config.scripts}3-global`)}.js`);
      }
      if (importee.startsWith('~module')) {
        return path.resolve(config.src, `${importee.replace('~module', '../node_modules/')}.js`);
      }
      if (importee.startsWith('~pattern')) {
        const pattern = importee.split('/')[1];
        const searchResults = walk(path.join(config.src, config.patterns), `${pattern}.js`);

        if (searchResults.length === 1) {
          return path.resolve(searchResults[0]);
        }
      }
    },
  };
};

const runScripts = (opts = {}) => {
  const plugins = [
  ];

  if (opts.sourceMap === false) {
    if (opts.legacy) {
      plugins.push(uglify.uglify());
    } else {
      plugins.push();
    }
  }

  const options = {
    input: path.join(config.src, config.scripts, opts.input || 'main.js'),
    plugins: [
      customResolve(),
      json(),
      resolve(),
      commonjs(),
      babel(
        {
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
                targets: (opts.legacy) ? config.legacy : {},
              },
            ],
          ],
          plugins: ['import-glob'],
        }
      ),
      (opts.sourceMap === undefined)
        ? null
        : (opts.legacy) ? uglify.uglify() : terser.terser()
    ]
  };

  rollup.rollup(options).then(bundle =>
    bundle
      .write({
        sourcemap: (opts.sourceMap === undefined) ? 'inline' : opts.sourceMap,
        format: 'iife',
        file: path.join(config.dest, config.scripts, opts.output || 'main.js'),
      })
  );
};

runScripts();
runScripts({
  output: `${config.main}.min.js`,
  sourceMap: false,
});
runScripts({
  input: `main.legacy.js`,
  output: `${config.main}.legacy.min.js`,
  legacy: true,
  sourceMap: false,
});

module.exports = runScripts;

