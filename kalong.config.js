// using module.exports here, so that this file can be consumed by fractal as well
module.exports = {
  title: 'Kalong',
  version: '0.0.1-alpha.1',

  // configure your localhost environment here, the host/proxy
  // should point to the root-folder configured below (default: ./public/)
  scheme: 'http',
  proxy: 'dev.localhost',
  port: 3000,

  // default entry points
  tasks: './tasks/',
  root: './public/',
  src: './src/',
  dest: './public/assets/',
  styleguide: './public/styleguide/',

  // paths to all asset-directories, for src + dest
  docs: 'docs/',
  fonts: 'fonts/',
  icons: 'icons/',
  images: 'images/',
  patterns: 'patterns/',
  scripts: 'scripts/',
  styles: 'styles/',

  // configure browsers you want to support for build process
  browserslist: {
    default: '> 1% in DE',
    legacy: [
      'last 2 Chrome versions', 'not Chrome < 60',
      'last 2 Safari versions', 'not Safari < 10.1',
      'last 2 iOS versions', 'not iOS < 10.3',
      'last 2 Firefox versions', 'not Firefox < 54',
      'last 2 Edge versions', 'not Edge < 15'
    ]
  },

  // those pages will be tested for valid html, additional to everything
  // in the styleguide patterns
  pages: [
    '/'
  ]
};
