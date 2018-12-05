const fs = require('fs');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const cssImport = require('postcss-import');
const config = require('../kalong.config');

const runPostcss = (opts = {}) => {
  const options = Object.assign(
    {
      file: `${config.dest}${config.styles}${config.main}.css`,
      sourceMap: true,
      plugins: [
        cssImport(),
        autoprefixer({ browsers: config.browserslist.default }),
      ],
    },
    opts
  );

  // if there is no sourceMap, we assume minify
  if (options.sourceMap === false) {
    options.plugins = [
      cssImport(),
      autoprefixer({ browsers: config.browserslist.default }),
      cssnano({
        safe: true,
      }),
    ];
  }

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
