// using module.exports here, so that this file can be consumed by fractal as well
module.exports = {
  title: 'Your Project',
  version: '0.0.1-alpha.1',

  // configure your localhost environment here, the host/proxy
  // should point to the root-folder configured below (default: ./public/)
  scheme: 'http',
  proxy: 'dev.localhost',
  port: 3000,

  // main file name (for styles and scripts)
  main: 'main',

  // default entry points
  root: './public/',
  src: './src/',
  dest: './public/assets/',
  styleguide: './public/styleguide/',
  library: './public/patterns/',

  // paths to all asset-directories, for src + dest
  assets: 'assets/',
  config: 'config/',
  docs: 'docs/',
  fonts: 'fonts/',
  icons: 'icons/',
  images: 'images/',
  patterns: 'patterns/',
  scripts: 'scripts/',
  styles: 'styles/',

  // configure legacy browsers that get older bloated code
  browsers: {
    modern: [
      'last 2 Firefox versions',
      'last 2 Chrome versions',
      'last 2 Safari versions',
      'last 2 Edge versions',
      'last 2 iOS versions',
      'last 2 ChromeAndroid versions',
    ],
    legacy: ['> 0.5% in DE'],
  },

  // do you want a default serviceworker offline-cache script?
  serviceworker: true,
};
