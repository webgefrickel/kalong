---
title: Linting
---

Repeat after me: "linting your code keeps you sane". This project provides three different linters: one for HTML, one for Sass (.scss-files to be specific) and one for JavaScript.

All those linters can be configured in their set of rules, and they can be globally deactivated in *config.js*, section *lint*.

## HTML: htmlhint

The linter used for your HTML-Code is [htmlhint](http://htmlhint.com). This project comes with a pre-configured set of rules to enforce nice HTML-styling, those rules and their current setting can be found in the file *.htmlhintrc*, description for the rules [can be found on github](https://github.com/yaniswang/HTMLHint/wiki/Rules).

If you use a CMS or any other tool that creates your HTML-Output, it sometimes makes more sense to just deactivate linting for HTML or change some of the default rules. But please always check your code for errors with tools such as the [W3C Validator](https://validator.w3.org/) to keep yourself sane. Valid HTML (at least regarding nesting and quotes) can save you a lot of headaches when styling your website.

## JavaScript: eslint

The linter used for JavaScript is [eslint](http://eslint.org), and this project comes with a pre-configured (kinda restrictive) set of rules, to enforce a consistent and sane code style. You can find all current rules and the settings for them in the file *.eslintrc*.

The predefined *.eslintrc.yml*-file sets all rules you can find [in the eslint documentatoin](http://eslint.org/docs/rules/), in the same order for easy reference.

Eslint is very customizable, you can write your own plugins, but for starters the default built-in rules are more than enough.

### ES6 / ES2015

Since we use ES6 in this project, eslint is configured to warn you on some things, that can be written better with ES6 (such as arrow-functions or let vs. var). If you don't want to use any ES6-features at all, you can just set all those rules to zero, to deactivate them.

## Sass: sass-lint

For linting our Sass we use [sass-lint](https://github.com/sasstools/sass-lint). Configuration for sass-lint can be found in *.sass-lint.yaml*, and is pre-configured to be quite strict. [All avaiable rules for sass-lint can be found here](https://github.com/sasstools/sass-lint/tree/master/docs/rules). By default anything in the folder *./src/scss/vendor* will __not__ be linted, so you can add third-party stylesheets easily.

As always: try to keep to the strict defaults and only in edge-cases change the default rules and allow exceptions (such as `!important`).
