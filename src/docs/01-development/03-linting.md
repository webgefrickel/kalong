---
title: Linting
---

This project provides four different linters: one for HTML, one for
accessibility issues, one for Sass (.scss-files to be specific) and one
for JavaScript.

## TODO note on prettier

## TODO EDITORCONFIG

## JavaScript: eslint

The linter used for JavaScript is [eslint](http://eslint.org), and this
project comes with a pre-configured set of rules, to enforce a
consistent and sane code style (based on
[XO](https://github.com/xojs/xo)). You can find all current rules and
the settings for them in the file _.eslintrc.yml_.

### EcmaScript Next / ES2020

Since we use the most current version of EcmaScript in this project,
eslint is configured to warn you on some things, that can be written
better/easier with new language features (such as arrow-functions, let
vs. var or destructuring). Please make use of those new awesome language
features where applicable.

TODO vendor not linted NOTE

## Sass: stylelint

For linting our Sass we use [stylelint](https://stylelint.io).
Configuration for stylelint can be found in _.stylelintrc.yml_, and is
pre-configured to be quite strict. By default anything in the folder
_./src/styles/3-vendor/_ will **not** be linted, so you can add
third-party stylesheets easily.

As always: try to keep to the strict defaults and only in edge-cases
change the default rules and allow exceptions (such as `!important`).

## HTML: html-validate

The linter used for HTML-Code is
[html-validate](https://html-validate.org/). The pre-defined rules can
be found and changed in _.htmlvalidate.json_.

If you use a CMS or any other tool that creates your HTML-Output, it
sometimes makes more sense to change some of the default rules. But
please always check your code for errors with tools such as the
[W3C Validator](https://validator.w3.org/) to keep everything valid.

---

Note: HTML will only be checked after a full build, only for templates.
Sass and JavaScript will also be linted during development.
