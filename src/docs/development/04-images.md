---
title: Images and Sprites
---

All images should go into *./src/images/*, be it SVG, PNG, GIF or PNG. You can use those images directly in your Sass as background-images with sth. like `background-image: url('../img/imagename.png');` - if you don't change this project's folder structure.

(That is for images you want to use in your templates and stylesheets directly. I often differentiate between two types of images: the ones you use and create for your stylesheets (those should go into *./src/images/*), and the ones editors can add as content — those images are not part of this build-chain.)

SVGs you want to create a sprite of should be copied in *./src/ions/* and be given a meaningful name. The sprite can be included directly in HTML like this (be sure to change the path to your assets/dest path):

```
<svg class="icon  icon--menu">
  <use xlink:href="assets/img/sprite.svg#icon--menu" />
</svg>
```

Default styling for all icons is provided via *./src/components/icons/icons.scss*, and you can then style your icons via CSS, size them, change the fill color etc. Including SVG via fragment-identifiers is still not supported in IE and buggy in Safari, so be sure to include the svgxuse polyfill, that comes pre-installed with this package. For more information on how to use the SVG sprites, refer to this article: [Cloudfour: Our SVG Icon process](http://blog.cloudfour.com/our-svg-icon-process/).

Feel free to change the sprites gulp task, if you need multiple sprites.

## Recommendations

Always try to use the right image-format for the thing you want to do, and compare their sizes to one another. Sometimes a JPG is better than a PNG regarding image size and quality; and sometimes it is the other way around. For everything that looks like a vectorgraphic: use SVG :)

Try software like [imageoptim](https://imageoptim.com/) and [imagealpha](http://pngmini.com/) to further reduce the size of your images — they can sometimes achieve better results than the (no longer included) gulp-imagemin-plugin.

