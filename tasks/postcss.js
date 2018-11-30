const fs = require('fs');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssImport = require('postcss-import');
const cssnano = require('cssnano');
const config = require('../kalong.config');

const runPostcss = (opts = {}) => {
  const options = Object.assign({
    file: `${config.dest}${config.styles}${config.main}.css`,
    sourcemap: true,
    plugins: [
      cssImport(),
      autoprefixer({ browsers: config.browserslist.default })
    ]
  }, opts);

  fs.readFile(options.file, (error, css) => {
    if (error) {
      console.log(error);
    }

    postcss(options.plugins)
      .process(css, {
        from: options.file,
        to: options.file,
        map: { inline: options.sourcemap }
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
          console.log(`${options.file} has postCSS'ed successfully.`);
        });
      });
  });
};

runPostcss(); // Development
runPostcss({ // Production
  file: `${config.dest}${config.styles}${config.main}.min.css`,
  sourcemap: false,
  plugins: [
    cssImport(),
    autoprefixer({ browsers: config.browserslist.default }),
    cssnano({
      safe: true
    })
  ]
});

