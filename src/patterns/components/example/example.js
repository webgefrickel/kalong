// You can import anything you want here, npm-modules, other files etc. pp.
// Examples:
// import $ from 'jquery';
// import Vue from 'vue';
//
// There is a shortcut for importing the Sass-shared.json config
// import config from '#sharedconfig'
//
// and a shortcut for importing a file from the node_modules-folder
// import somelib from '#module/somelib/dist/somefile';
//
// and other helpers for vendor/global/helper
// import mediaquery from '#helper/mediaquery';
// import fontloader from '#global/fontloader';
// import somefile from '#vendor/somefile';
//
// And finally: a shortcut to import patterns—you don't have to specify
// the full path, because pattern-names should be unique anyway:
// import button from '#pattern/button';

// TODO refactor to ~helper
import mediaquery from '~helper/mediaquery';

// TODO remove this, introduce nodelist.forEach polyfill
import select from 'select-dom';

export default (scope = document) => {
  const examples = select.all('.js-example', scope);

  examples.forEach(example => {
    if (mediaquery('l')) {
      console.log(`Doing something with ${example} above breakpoint L`);
    } else {
      console.log(`Doing something with ${example} below breakpoint L`);
    }
  });
};
