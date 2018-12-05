const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const sass = require('node-sass');
const magic = require('node-sass-magic-importer');
const json = require('node-sass-json-importer');
const config = require('../kalong.config');

const runSass = (opts = {}) => {
  // set some sane defaults for development
  const options = Object.assign(
    {
      file: `${config.src}${config.styles}${config.main}.scss`,
      outFile: `${config.dest}${config.styles}${config.main}.css`,
      outputStyle: 'expanded',
      sourceMap: true,
      importer: [json(), magic()],
    },
    opts
  );

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
