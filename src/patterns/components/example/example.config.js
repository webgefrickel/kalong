// please note: the config files use commonjs syntax, this is needed to work with fractal
const faker = require('faker');
faker.locale = 'de';

module.exports = {
  title: 'Example Component',
  status: 'prototype', // can also be wip or ready
  tags: [ 'tag-one', 'tag-two' ],
  context: {
    text: faker.lorem.paragraph()
  },
  variants: [
    {
      name: 'default',
      context: {
        modifiers: 'example--default'
      }
    },
    {
      name: 'large',
      context: {
        modifiers: 'example--large',
        text: faker.lorem.paragraph()
      }
    }
  ]
};
