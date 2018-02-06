import * as globals from './4-global/*.js';
import * as subglobals from './4-global/**/*.js';
import * as patterns from '../patterns/**/*.js';

// additional sanity check for modern browsers—and then, enhance!
if ('visibilityState' in document) {
  // remove the no-js class
  document.documentElement.classList.remove('no-js');

  // load and execute all scripts from global and all patterns automatically
  [ globals, subglobals, patterns ].forEach(items => {
    Object.keys(items).forEach(i => {
      items[i]();
    });
  });
}
