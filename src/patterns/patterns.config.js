const config = require('../../kalong.config.js');
const shared = require('../styles/1-config/shared.json');

module.exports = {
  context: {
    debug: true,
    styleguide: true,
    shared,
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
