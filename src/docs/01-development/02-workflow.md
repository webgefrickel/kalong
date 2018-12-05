---
title: General workflow
---

The core of this styleguide-system is powered by
[fractal](https://fractal.build/), so please read through the
documentation there, especially the
[core concepts](https://fractal.build/guide/core-concepts/views). Kalong
uses nunjucks-templates instead of the default handlebars-templates, to
make patterns and snippets easier for consumption in PHP, using custom
Twig-adapters.

## How to get started

About 90% of your work should take place in the folder ./src/patterns/.
Create new patterns and components, group them in collections, add Sass
and JavaScript, and later combine everything in your templates.

By default you should start with the following four folders, roughly
implementing the idea of
[Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/):

- patterns/basics  
  This is where you should give all HTML-Elements in your project some
  basic, sane styles—in addition to the included reset styles and
  normalize.css. Think: default table-styling, deafult
  input[type="text"]-styling etc. pp. Your CSS should not contain any
  class-declarations, except for simple re-usable ones.
- patterns/components  
  This is where all reusable components should go, like buttons, cards,
  boxes—everything that can occur anywhere in your templates, in any
  number.
- patterns/globals  
  This is where all 'global' components should go, such as a global
  navigation, footer, header or logo—stuff that is on almost any page,
  thus 'globally' present everywhere.
- patterns/templates And finally, all your templates: those usually glue
  everything from above together, and add the basic `<head>` and
  HTML-Structure.

(Note: there is a folder \_preview included as well: this provides the
wrapping template used for each pattern-preview in this styleguide.
Usually you can just leave this alone.)

Feel free to add more collections, if it makes sense. You could for
example add a collection named 'shop', and group any ecommerce-related
components in there, like checkout-buttons, shopping-cart, order-forms
etc.

## Examples

Have a look at the example-pattern from /src/patterns/components/example
— this should give you a rough idea, on how to use this system. Also
have a look at the default button-component in
patterns/components/button for a simpler use-case.

## Further Conventions

When creating a new pattern, stick to the following
naming/file-convention. Create a folder patternname, in one of the
pattern-collections. Inside of that folder there can be the following:

- patternname.scss—your styles should go here
- patternname.js—your JavaScript should go here. This will be autoloaded
  by default.
- patternname.config.yml OR patternname.config.js—Configuration for your
  pattern, see
  [component configuration](https://fractal.build/guide/components/configuration)
  for more details. Use YAML if you don't need the power of JavaScript
  to keep things simple
- patternname.test.js—JavaScript Unit/Integration/Whatever-Tests
  ([ava](https://github.com/avajs/ava) is included by default)
- patternname.html—HTML for your pattern, using nunjucks syntax
- README.md—if you have any additional notes for how to use the pattern

(Note: Components and patterns are collated by default)

For more information, have a look at the
[Fractal Guide for components](https://fractal.build/guide/components/creating).
