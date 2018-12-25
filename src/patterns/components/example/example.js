// You can import anything you want here, npm-modules, other files etc. pp.
// Examples:
// import $ from 'jquery';
//
// There are shortcuts for importing the shared .json config files
// import config from '~config/mediaqueries'
//
// and a shortcut for importing a file from the node_modules-folder
// import somelib from '#module/somelib/dist/somefile';
//
// and other helpers for vendor/global/helper
// import mediaquery from '~helper/mediaquery';
// import fontloader from '~global/fontloader';
// import somefile from '~vendor/somescript';
//
// And finally: a shortcut to import patterns—you don't have to specify
// the full path, because pattern-names should be unique anyway:
// import button from '~pattern/button';
import mediaquery from '~helper/mediaquery';

export default (scope = document) => {
  const examples = scope.querySelectorAll('.js-example');
  examples.forEach(example => {
    if (mediaquery('l')) {
      console.log(`Doing something with ${example} above breakpoint L`);
    } else {
      console.log(`Doing something with ${example} below breakpoint L`);
    }
  });
};
