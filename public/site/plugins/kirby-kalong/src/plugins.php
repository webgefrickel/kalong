<?php

Kirby::plugin('kalong/image', [
  'fileMethods' => [

    'kalongImage' => function($modifiers = '', $sizes = '100vw', $ratio = false, $hideCaption = true, $media = '') {
      $widths = option('thumbs.srcsets.default');
      $quality = option('thumbs.quality');
      $image = $this;
      $alt = ($image->alt()->isEmpty()) ? $image->filename() : $image->alt();
      $caption = ($image->caption()->isEmpty()) ? false : $image->caption()->nl2br();
      $title = ($image->photographer()->isEmpty()) ? false : $image->photographer();
      $focus = ($image->focus()->isEmpty())
        ? (object) ['x' => 0.5, 'y' => 0.5]
        : json_decode($image->focus()->value());
      $actualRatio = $image->width() / $image->height();
      $srcset = '';

      if ($actualRatio >= 1) {
        $modifiers .= '  image--landscape';
      } else {
        $modifiers .= '  image--portrait';
      }

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
          } else {
            // requirements in dimensions for image not met, use the largest
            // version of the image available. we do this to prevent upscaling
            // of images beyond their actual size (which focusCrop would do)

            if ($image->width() >= $width) {
              $h = $image->height();
              $w = $h * $ratio;
            }
            if ($image->height() >= $height) {
              $w = $image->width();
              $h = $w / $ratio;
            }

            $temporaryImage = $image->focusCrop($w, $h, [
              'focusX' => $focus->x,
              'focusY' => $focus->y,
              'quality' => $quality,
            ]);
            $srcset .= $temporaryImage->url() . ' ' . $width . 'w, ';
          }
        }
      } else {
        // this one is easy: no focus-ratio-cropping? just use the srcset function from kirby
        $srcset = $image->srcset();
      }

      return [
        'modifiers' => $modifiers,
        'fallback' => $image->placeholderUri(),
        'alt' => $alt,
        'title' => $title,
        'caption' => ($hideCaption === true) ? false : $caption,
        'sources' => [
          [
            'media' => $media,
            'sizes' => $sizes,
            'srcset' => trim($srcset, ' ,'),
          ]
        ]
      ];
    },
  ],
]);

Kirby::plugin('kalong/seo', [
  'pageMethods' => [
    'kalongPageTitle' => function() {
      $site = kirby()->site();
      $page = $this;
      $isHome = $page->isHomeOrErrorPage();
      $title = ($page->seotitle()->isEmpty())
        ? $page->title() . ' | ' . $site->seotitle()
        : $page->seotitle();

      if ($page->isDescendantOf('archiv')) {
        $title = ($page->seotitle()->isEmpty())
          ? '[' . $page->title() . '] ' . $page->subtitle() . ' | ' . $site->seotitle()
          : $page->seotitle();
      }

      if ($isHome) {
        $title = $site->seotitle();
      }

      return $title;
    },
    'kalongPageDescription' => function() {
      $site = kirby()->site();
      $page = $this;
      $isHome = $page->isHomeOrErrorPage();
      $desc = ($page->seodescription()->isEmpty())
        ? Str::excerpt($page->text()->kirbytext(), 150)
        : $page->seodescription();

      if ($isHome) {
        $desc = $site->seotitle() . '—' . $site->seodescription();
      }

      return $desc;
    }
  ]
]);
