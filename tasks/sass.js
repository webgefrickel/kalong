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

const compileSass = (opts = {}) => {
  // set some sane defaults for development
  const options = Object.assign({
    file: 'src/styles/main.scss',
    outFile: 'public/assets/styles/main.css',
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
      console.error(error);
    }
  });

  fs.writeFile(options.outFile, result.css, error => {
    if (error) {
      console.error(error);
    }
  });

  // log successful compilation to terminal
  console.log(`${options.outFile} has been built successfully.`);
};

compileSass(); // Development
compileSass({ // Production
  outFile: 'public/assets/styles/main.min.css',
  outputStyle: 'compressed',
  sourceMap: false
});
