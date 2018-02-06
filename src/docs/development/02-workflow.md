---
title: General workflow
---

## Watching and building

After having everything up and running (and configured to your liking) the main two gulp-tasks you will be using are:

- `npm start` — the default watch task for development
- `npm run build` — the 'make everything production-ready' task

For more information on the gulp tasks avaiable by default, have a look at [Gulp & Tasks Overview](tasks.md).

## Where should I put my stuff?

All your Sass, JavaScript, Images and SVGs that you want to use in your stylesheets and all fonts should go into their respective folders in *./src/*.

All those files are gonna be parsed/compiled/minified/concatenated/copied to the __dest__-Folder in public by the gulp tasks. The idea here is: keep all your sources in the src-folder, let gulp do the heavy lifting.

Everything else, that is HTML, CMS, PHP or whatever should be public (favicons, editorial images, documents etc.), should reside in the folder *./public*.


## Button component

The button component can be included within other components like this:

```
{% render '@button' %}
```

This template for this component looks like this:

```
{{view @button}}
```

and it therefore expects a set of data to render it that is in the following format:

```
{{context @button}}
```
