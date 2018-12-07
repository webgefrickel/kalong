const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const cssImport = require('postcss-import');
const config = require('../kalong.config');

const runPostcss = (opts = {}) => {
  const options = {
    file: path.join(config.dest, config.styles, opts.input || `${config.main}.css`),
    sourceMap: (opts.sourceMap === undefined),
    plugin: [
      cssImport(),
      autoprefixer({ browsers: config.browserslist.default }),
      (opts.souceMap === undefined) ? null : cssnano({ safe: true }),
    ]
  };

  fs.readFile(options.file, (error, css) => {
    if (error) {
      console.log(error);
    }

    postcss(options.plugins)
      .process(css, {
        from: options.file,
        to: options.file,
        map: { inline: options.sourceMap },
      })
      .then(result => {
        result.warnings().forEach(warn => {
          console.log(warn.toString());
        });
        fs.writeFile(options.file, result.css, error => {
          if (error) {
            console.log(error);
          }

          // log successful compilation to terminal
          console.log(
            `${
              options.file
            } has been post-processed with postCSS successfully.`
          );
        });
      });
  });
};

module.exports = runPostcss;
