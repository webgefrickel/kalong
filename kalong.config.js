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
  config: 'config/',
  docs: 'docs/',
  fonts: 'fonts/',
  icons: 'icons/',
  images: 'images/',
  patterns: 'patterns/',
  scripts: 'scripts/',
  styles: 'styles/',

  // configure legacy browsers that get older bloated code
  legacy: '> 1% in DE',
};
