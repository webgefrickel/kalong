---
title: Sass
---

Sass in this project will be compiled with the plugin gulp-sass, using node-sass. This means we don't have to install the rubygem for sass anymore. This also means: have a look at the [compatibility table](http://sass-compatibility.github.io/) if you want to use any edge-features from ruby-sass.

Everyime I say Sass - I mean the language and Sass with the scss-syntax. I prefer the scss-syntax, because it is easier for people who already know CSS. Curly braces FTW!

## Sass Guidelines

Hugo Giraudel wrote an awesome piece on everything you need to know about Sass, it's called [Sass Guidelines](http://sass-guidelin.es/) and you should really have a look at it. I agree with this guideline in almost all points, but I try to keep something more simple, and some things more strict, the linter will let you know :)

## Structure

There is one main-file, where everything is included (mixins, modules, configurations etc.) in the order you specify. By default it's *./src/scss/main.scss*. This will be compiled into one single CSS-file, which you can then use on your website. I still prefer this approach over multiple files that need to be loaded on different pages (as long as it's a small website), because once the main stylesheet is loaded, it is cached. The only issue here: be careful when supporting IE9 or lower, because may run into the [selector limit issue](http://blesscss.com/)

All other files are structure in the following folders:

- base — styling for all basic elements, aka HTML-Elements. Defaults for inputs, tables, images, headings etc.
- config — global variables, maps, breakpoints colors etc. Some things get their own map and helper-function (in tools)
- modules — the main folder. This is where all the modules go, and almost everything is a module. If you want to, you can split this up in different folders and create sth. as proposed in the Sass Guidelines with a folder *layouts*, *themes*, *pages* etc. for stuff like your grids, headers, wrappers etc. and custom page styles — but I like to keep it simple: everything is a module, except:
- tools — all custom mixins and functions go here. There are a lot of helper functions out-of-the-box
- vendor — other 3rd-party styles, e.g. the generated sprite-map etc.

## Conventions

The general rule here would be the same as in JavaScript:

__One module, one file, one declaration__

### BEM

This project uses the oldschool BEM-Style (Block, Element, Modifier) to describe your modules, and with Sass this can look like:

```scss
.your-module {
  display: inline-block;

  &--with-fancy-hair { // a modifier
    color: $color-special;
  }

  &__sth-inside { // an element inside of .your-module and styled in relation to it
    float: left;
  }
}
```

Whereas the one-module-one-declaration means: one module should only describe one selector or variants of it, but it would be absolutely OK to write the above example as, and throw it in one file:

```scss
.your-module {
  display: inline-block;
}

.your-module--with-fancy-hair { // a modifier
  color: $color-special;
}

.your-module__sth-inside { // an element inside of .your-module and styled in relation to it
  float: left;
}
```

... especially when things get longer.

### Linting

The pre-bundled sass-lint task comes with pretty strict settings, regarding naming of things, sort-order of properties and various other possible problems. Please just try to stick to it, to keep things consistent.

### Vendor prefixes

Just don't write any, unless you are absolutely sure and want to target that specific browser. Vendor prefixes are added as needed by [autoprefixer](https://github.com/postcss/autoprefixer). To change supported browsers have a look at *config.js* in the root folder and change browsersupport-array accordingly.

## Defaults

By default, this project uses REM as units for fonts, assumes a mobile-first strategy, IE10+ usage of CSS3-features and tries to set sane margin/padding defaults by defining a base-unit.

Have a look at *./src/scss/config/_sizes.scss* - this is where the `$base-unit` will be defined and then used throughout the project, especially the mixins for positioning and spacing. You can then use them like this:

```scss
.some-element {
  @include spacing(b 2); 
  // ==> margin-bottom: $base-unit * 2;

  @include spacing-inner(l 1/2, r 1/2);
  // ==> padding-left: $base-unit / 2; padding-right: $base-unit / 2;

  @include absolute(t 1, l 3, r 50px);
  // ==> position: absolute; top: $base-unit; left: $base-unit * 3; right: 50px;
}
```

By using rem, you can scale your website easily — just set the font-size on the html/body elements for different breakpoints if you want to.

I highly recommend scanning through everything in config and tools, a detailed documentation on all mixins and how to use them will follow.

## Used 3rd-party tools

This project by default includes [normalize.css](http://necolas.github.io/normalize.css/) and some resets and helpers I wrote myself or combined from other projects. Those are all installed via npm and are included in main.scss by default.
