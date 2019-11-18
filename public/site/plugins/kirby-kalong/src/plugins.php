<?php

Kirby::plugin('kalong/image', [
  'fileMethods' => [
    'kalongImage' => function($modifiers = '', $sizes = '100vw', $ratio = false, $hideCaption = true, $media = '') {
      $widths = option('thumbs.srcsets.default');
      $quality = option('thumbs.quality');
      $image = $this;
      $alt = ($image->alt()->isEmpty()) ? $image->filename() : $image->alt();
      $caption = ($image->caption()->isEmpty()) ? '' : $image->caption();
      $focus = ($image->focus()->isEmpty())
        ? (object) ['x' => 0.5, 'y' => 0.5]
        : json_decode($image->focus()->value());
      $actualRatio = $image->width() / $image->height();
      $srcset = '';

      // we need to manually create a srcset by hand, since focusCrop AND srcset don't work together
      if ($ratio !== false) {
        foreach ($widths as $width) {
          $height = intval($width / $ratio);
          if ($image->width() >= $width && $image->height() >= $height) {
            $temporaryImage = $image->focusCrop($width, $height, [
              'focusX' => $focus->x,
              'focusY' => $focus->y,
              'quality' => $quality,
            ]);
            $srcset .= $temporaryImage->url() . ' ' . $width . 'w, ';
          }
        }

        // FINALLY, largest image variant
        // if the ratio of the image is higher than the given one, the image
        // is wider, thus we use the height as determinator of size
        if ($actualRatio > $ratio) {
          $w = intval($image->height() * $ratio);
          $h = $image->height();
        } else {
          $w = $image->width();
          $h = intval($image->width() / $ratio);
        }

        // final max-size fallback image, add this to srcset as well
        $image = $image->focusCrop($w, $h, [
          'focusX' => $focus->x,
          'focusY' => $focus->y,
          'quality' => $quality,
        ]);
        $srcset .= $image->url() . ' ' . $w . 'w, ';
      } else {
        // this one is easy: no focus-ratio-cropping?
        // just use the srcset function from kirby
        $srcset = $image->srcset();
      }

      // get srcset from config
      return [
        'modifiers' => $modifiers,
        'fallback' => $image->url(),
        'alt' => $alt,
        'caption' => ($hideCaption) ? false : $caption,
        'sources' => [
          [
            'media' => $media,
            'sizes' => $sizes,
            'srcset' => trim($srcset, ' ,'),
          ]
        ]
      ];
    }
  ]
]);
