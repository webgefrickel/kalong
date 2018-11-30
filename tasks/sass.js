// import { writeFile } from 'fs';
// import { dirname } from 'path';
// import mkdirp from 'mkdirp';
// import sass from 'node-sass';
// import globbing from 'node-sass-globbing';
// import json from 'node-sass-json-importer';

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const sass = require('node-sass');
const magic = require('node-sass-magic-importer');
const json = require('node-sass-json-importer');
const config = require('../kalong.config');

const runSass = (opts = {}) => {
  // set some sane defaults for development
  const options = Object.assign({
    file: `${config.src}${config.styles}${config.main}.scss`,
    outFile: `${config.dest}${config.styles}${config.main}.css`,
    outputStyle: 'expanded',
    sourceMap: true,
    importer: [
      json(),
      magic()
    ]
  }, opts);

  // render the result
  const result = sass.renderSync(options);

  // write the result to file
  mkdirp(path.dirname(options.outFile), error => {
    if (error) {
      console.log(error.status);
      console.log(error.column);
      console.log(error.message);
      console.log(error.line);
    }
  });

  fs.writeFile(options.outFile, result.css, error => {
    if (error) {
      console.log(error);
    }
  });

  // log successful compilation to terminal
  console.log(`${options.outFile} has been built successfully.`);
};

runSass(); // Development
runSass({ // Production, let postcss handle minifying
  outFile: `${config.dest}${config.styles}${config.main}.min.css`,
  sourceMap: false
});
