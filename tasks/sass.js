const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const sass = require('node-sass');
const magic = require('node-sass-magic-importer');
const json = require('node-sass-json-importer');
const config = require('../kalong.config');

const runSass = (opts = {}) => {
  // set some sane defaults for development
  const options = {
    file: path.join(config.src, config.styles, opts.input || `${config.main}.scss`),
    outFile: path.join(config.dest, config.styles, opts.output || `${config.main}.css`),
    outputStyle: 'expanded',
    sourceMap: (opts.sourceMap === undefined),
    importer: [json(), magic()],
  };

  try {
    const result = sass.renderSync(options);

    mkdirp(path.dirname(options.outFile), error => {
      if (error) {
        console.log(error);
      }
    });

    fs.writeFile(options.outFile, result.css, error => {
      if (error) {
        console.log(error);
      }
    });

    // log successful compilation to terminal
    console.log(`${options.outFile} has been built successfully.`);
  } catch (err) {
    console.log('failure', err);
  }
};

module.exports = runSass;
