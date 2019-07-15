---
title: Images and Sprites
---

## Images

All images that are not user-generated should go into _./src/images/_,
be it SVG, PNG, GIF or PNG. You can use those images directly in your
Sass as background-images with sth. like
`background-image: url('../images/imagename.png');` or in your HTML—the
default path is ./assets/images/.

This project comes with a pattern for images, ready for all the stuff
you want (sizes, srcset etc.)—have a look at
src/patterns/2-elements/image

## SVG Sprites

SVGs you want to create a sprite of should be copied to _./src/icons/_
and be given a meaningful name. You will find a sprite.yml-config file
in the same folder: use this to provide accessible titles and
descriptions for your icons. Single icons can then be used with the
icon-pattern provided in src/patterns/1-identity/icon like this:

```
{% render '@icon--logo', { modifiers: 'logo__icon' }, true %}
```

You can then style your icons via CSS, size them, change the fill color
etc., using modifier-classes as above.

## Recommendations

Always try to use the right image-format for the thing you want to do,
and compare their sizes to one another. Sometimes a JPG is better than a
PNG regarding image size and quality; and sometimes it is the other way
around.

Use software like [imageoptim](https://imageoptim.com/) and
[imagealpha](http://pngmini.com/) to further reduce the size of your
images — they can sometimes achieve amazing results in compression (and
IMHO are better than any build-chain image-compression tools).
