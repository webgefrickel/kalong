---
title: General Conventions
---

Disclaimer: This is a highly opinionated project and set of files and
conventions. If you don't like any of those: feel free to change them
for your project or fork the hell out of this repository. Be sure to
update this documentation if you do so.

## Language

Documentation should be written in English, since it is the most
accessible language for developers worldwide, even if the page/content
itself is in other languages. Try to use simple language and provide
examples wherever applicable.

## Coding Conventions

If your text-editor/IDE of choice supports
[editorconfig](http://editorconfig.org), you should already be fine,
this project provides an .editorconfig-file that sets all conventions.
If not: s Spaces for everything, UTF-8, unixsStyle linebreaks, no
trailing spaces except for Markdown and text-files.

## Linting

The JavaScript-, HTML/a11y- and Sass-linters will be enabled by default
with the all the code-formatting settings from above, so if you try to
move away from those conventions: you will be warned :) The linters will
try to enforce a specific coding style regarding whitespace, naming
stuff, usage of variables etc. to make your code consistent, so please
try to stick to it. You can always customize the linters:
[read more about that here](docs/development/linting).

## Filenames

Files should always be in lowercase, use dashes where applicable. No
underscores, unless you want to exclude files from the styleguide, see
[Naming and referencing in Fractal](https://fractal.build/guide/core-concepts/naming).
