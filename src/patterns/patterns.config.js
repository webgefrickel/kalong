const kalong = require('../../kalong.config');
const { fonts } = require('../config/fonts');
const { mediaqueries } = require('../config/mediaqueries');

module.exports = {
  context: {
    config: {
      kalong,
      fonts,
      mediaqueries,
      colors: {
        icon: '#000',
        theme: '#f00',
        tile: '#f00',
      },
      debug: true,
      styleguide: true,
      hash: new Date().getTime(),
    },
    language: {
      code: 'en',
      locale: 'en_US',
      direction: 'ltr',
    },
    nav: {
      main: [
        {
          href: '#somepage',
          label: 'Somepage',
        },
      ],
    },
    pageTitle: `${kalong.title}—Styleguide`,
    pageDescription: `A pattern library for ${kalong.title}`,
    pageModifiers: '',
  },
};
