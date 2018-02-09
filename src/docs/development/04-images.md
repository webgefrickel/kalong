---
title: Images and Sprites
---

All images that are not user-generated should go into *./src/images/*, be it SVG, PNG, GIF or PNG. You can use those images directly in your Sass as background-images with sth. like `background-image: url('../images/imagename.png');` or in your HTML—default path is ./assets/images/.

SVGs you want to create a sprite of should be copied in *./src/icons/* and be given a meaningful name. The sprite can be included directly in HTML like this:

```
<svg class="icon  icon--menu">
  <use xlink:href="assets/images/sprite.svg#icon--menu" />
</svg>
```

Default styling for all icons is provided via *./src/patterns/components/icons/icons.scss*. You can then style your icons via CSS, size them, change the fill color etc., using the modifier-class as above. Including SVG via fragment-identifiers is still not supported in IE and buggy in Safari, so be sure to include the svgxuse polyfill, that comes pre-installed with this package.

For more information on how to use the SVG sprites, refer to this article: [Cloudfour: Our SVG Icon process](http://blog.cloudfour.com/our-svg-icon-process/).

Feel free to change the sprites gulp task, if you need multiple sprites.

## Recommendations

Always try to use the right image-format for the thing you want to do, and compare their sizes to one another. Sometimes a JPG is better than a PNG regarding image size and quality; and sometimes it is the other way around. 

Use software like [imageoptim](https://imageoptim.com/) and [imagealpha](http://pngmini.com/) to further reduce the size of your images — they can sometimes achieve amazing results in compression.

