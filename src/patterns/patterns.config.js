const kalong = require('../../kalong.config');
const { fonts } = require('../config/fonts');
const { colors } = require('../config/colors');
const { mediaqueries } = require('../config/mediaqueries');

module.exports = {
  context: {
    config: {
      kalong,
      fonts,
      mediaqueries,
      colors,
      debug: false,
      styleguide: true,
      hash: new Date().getTime(),
    },
    language: {
      code: 'en',
      locale: 'en_US',
      direction: 'ltr',
    },
    page: {
      title: `${kalong.title}—Styleguide`,
    },
    nav: {
      main: [
        {
          href: '#somepage',
          label: 'Somepage',
        },
      ],
    },
  },
};
