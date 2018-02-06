// we need the polyfill for the legacy-version of the javascript
// since old browsers to not support arrow-functions, destructuring etc.
import 'babel-polyfill';

import * as globals from './4-global/*.js';
import * as subglobals from './4-global/**/*.js';
import * as patterns from '../patterns/**/*.js';

// in here we do not check for visibilityState, this applies for all
// browser: remove the no-js class and load all globals and patterns
document.documentElement.classList.remove('no-js');

[ globals, subglobals, patterns ].forEach(items => {
  Object.keys(items).forEach(i => {
    items[i]();
  });
});
