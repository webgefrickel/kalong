const config = require('../../kalong.config.js');
const fonts = require('../config/fonts.json');
const mediaqueries = require('../config/mediaqueries.json');

module.exports = {
  context: {
    debug: true,
    styleguide: true,
    config: {
      config,
      fonts,
      mediaqueries,
    },
    site: {
      lang: 'en',
      dir: 'ltr',
      title: config.title + '—Styleguide, v' + config.version,
      description: '',
      themecolor: '#000000',
      modifiers: '', // global css-classes, applied to <html>
    },
    globals: {
      nav: {
        main: [
          {
            href: '#somepage',
            label: 'Somepage',
          },
        ],
      },
    },
  },
};
