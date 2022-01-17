// Using module.exports here, so that this file can be consumed by fractal as well
module.exports = {
  title: 'Your Project',

  // Provide an own version number and don't use the package.json-version,
  // since this describes the version number of kalong, and not the resulting styleguide
  version: '0.1.0',

  // Configure your localhost environment here, the host/proxy
  // should point to the root-folder configured below (default: ./public/)
  proxy: 'dev.dev.localhost',
  https: true,
  port: 3000,

  // Main file name (for styles and scripts)
  main: 'main',

  // Default entry points
  root: './public/',
  src: './src/',
  dest: './public/assets/',
  styleguide: './public/styleguide/',
  library: './public/site/patterns/',

  // Paths to all asset-directories, for src + dest
  assets: 'assets/',
  config: 'config/',
  docs: 'docs/',
  fonts: 'fonts/',
  icons: 'icons/',
  images: 'images/',
  patterns: 'patterns/',
  templates: 'templates/',
  scripts: 'scripts/',
  styles: 'styles/',
};
