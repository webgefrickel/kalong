---
title: JavaScript
---

## Structure

Install every module/library/script/tool/helper — whatever you want with
npm. This project uses rollup with some plugins to make all those
awesome tools usable for your browser/frontend. Then just use the new
ES2015-modules import-syntax and you are all set. Have a look at the
included modules for fontloading and using breakpoints in your
JavaScript.

For JavaScript it's the same as with Sass: there is one main-file, that
will be loaded as the entry-point for all your JavaScript, include all
your other modules from there.

A very basic sample is provided in the folder _./src/js/_.

## Your own modules

The recommended way would be to create your own modules, document them
and throw them on npm. If this is not feasible, just create a file in
_./src/js/modules/_ with the name of your module, for example
_somemodule.js_

To keep things consistent throughout the project I would recommend one
simple rule:

**One module, one file, one function**

Meaning: every module should get its own file (e.g. in
_/src/js/modules/somemodule.js_), the module should have the same
filename as the exported function, and there should be only ever one
function, that said module exports.

With ES6 this could look like this:

```js
// use ES2015 modules to import other stuff you might need
import stuff from 'othermodule';

// those two vars will be used in your module, but won't be exported
const wontBeExported = () => { ... };
const wontBeExportedEither = 12;

// that's the function this module will export
export default () => {
  // do stuff...

  return 'sth'; // if needed
};
```

If you have to export multiple, similar functions that should live in
one module, you can do so with the new ES6-modules, but I would advise
to stick to the pattern above, and then just do sth. like:

```js
export default () => {
  ...

  // using new ES6 Enhanced Object Literals to export multiple functions
  return {
    funcOne () {
      console.log('fuck yeah');
    },
    funcTwo () {
      console.log('this is nice');
    }
  };

};

```

This way you can throw similar functions into one module, and use it
like this:

```js
import someModule from './modules/somemodule';

someModule().funcOne();
someModule().funcTwo();
```

The idea is: don't make me think. And this way I just have to remember
that I will always get **one** function if I import sth.

Keep your modules as short, concise and reusable as possible and
refactor all the time :)

### Recommended ES6-Features

Since ES6 is here to stay: use it. You still can write 'normal'
JavaScript, but I really recommend to check some of the new features
out. Though there are features that are not well supported, I recommend
only those, that can be easily transpiled with babel.js and don't
require a polyfill:

- arrow functions
- let and const
- ES6 modules (import + export)
- Default + Rest + Spread
- destructuring
- literal object creation
- template strings
- classes (if you really need those over basic \$.extend or
  \_.assign...)

For more information refer to the
[Learn ES2015 page on babeljs.io](http://babeljs.io/docs/learn-es2015/).
If you want to use 'advanced' features like WeakMap etc., you have to
use the polyfill from babel.

If you want to use promises this package includes
[es6-promise](https://github.com/stefanpenner/es6-promise) to include a
fallback for IE<=11.

## Plugin, library polyfill Recommendations

For general "somebody wants a simple website with carousels and stuff" I
hereby recommend some plugins to save some time:

- [jQuery](http://jquery.com/), because after all: you might need jQuery
  ;)
- [svgxuse](https://github.com/Keyamoon/svgxuse): a polyfill to make the
  SVG-sprites work in IE (included)
- Carousel/Slider: [slick](https://github.com/kenwheeler/slick), the
  last carousel you'll ever need
- Lightbox:
  [Magnific Popup](https://github.com/dimsemenov/Magnific-Popup) or the
  older [colorbox](https://github.com/jackmoore/colorbox)
- Native Video: [video.js](https://github.com/videojs/video.js) or
  [mediaelement](https://github.com/johndyer/mediaelement)
- Though I still recommend jQuery, I don't recommend jQuery UI. It feels
  outdated, and there are a lot of smaller, better plugins for stuff
  like datepickers for example:
  [pickadate](http://amsul.ca/pickadate.js/)
- For all your functional needs and the occasional debounce/throttle:
  [lodash](https://lodash.com/)
- In case you use responsive images, use
  [picturefill](https://scottjehl.github.io/picturefill/)

For an insane list of awesome stuff, have a look at those two lists:
[https://github.com/sorrycc/awesome-javascript](https://github.com/sorrycc/awesome-javascript)
and
[https://github.com/sindresorhus/awesome](https://github.com/sindresorhus/awesome).
