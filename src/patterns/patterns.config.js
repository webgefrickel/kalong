const config = require('../../kalong.config');
const fonts = require('../config/fonts');
const colors = require('../config/colors');
const mediaqueries = require('../config/mediaqueries');

module.exports = {
  context: {
    debug: false,
    styleguide: true,
    hash: new Date().getTime(),
    config: {
      config,
      fonts,
      mediaqueries,
    },
    site: {
      lang: 'en',
      dir: 'ltr',
      title: config.title + '—Styleguide',
      description: '',
      themecolor: colors.colors.main,
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
