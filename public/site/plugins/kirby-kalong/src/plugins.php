<?php

Kirby::plugin('kalong/image', [
  'fileMethods' => [
    'kalongImage' => function($modifiers = '', $ratio = false, $sizes = '100vw', $media = '', $hideCaption = true) {
      $image = $this;
      $widths = option('thumbs.srcsets.default');

      $modifiers .= ($image->isLandscape()) ? ' image--landscape ' : ' image--portrait ';
      $alt = ($image->alt()->isEmpty()) ? $image->filename() : $image->alt();
      $title = ($image->photographer()->isEmpty()) ? false : $image->photographer();
      $caption = ($image->caption()->isEmpty()) ? false : $image->caption()->nl2br();
      $src = $image->placeholderUri();
      $srcset = $image->srcset();

      // if a ratio is set, we have to built the focusCrop srcset
      if ($ratio !== false) {
        $focusSrcsetConfig = [];
        foreach ($widths as $width) {
          $height = intval($width / $ratio);
          $focusSrcsetConfig[$width . 'w'] = compact('width', 'height');
        }

        $minSize = array_values($focusSrcsetConfig)[0];
        // TODO create a nice combination plugin of blurry + focusCrop
        // blurryimage will not work for preview for now
        // for the preview-image, nicely blurred is not that important, but cropped size is
        $tmpImage = $image->focusCrop(round($minSize['width']/10), round($minSize['height']/10));
        $src = $tmpImage->url();
        $srcset = $image->focusSrcset($focusSrcsetConfig);
      }

      return [
        'modifiers' => $modifiers,
        'src' => $src,
        'alt' => $alt,
        'title' => $title,
        'caption' => ($hideCaption === true) ? false : $caption,
        'sizes' => $sizes,
        'srcset' => $srcset,
      ];
    },

    'kalongVideo' => function($modifiers) {
      $video = $this;
      $poster = ($video->poster()->isNotEmpty())
        ? $video->poster()->toFile()->resize(1920) : null;
      $attributes = ($video->attributes()->isNotEmpty())
        ? implode(' ', $video->attributes()->split()) : null;

      return [
        'modifiers' => $modifiers,
        'src' => $video->url(),
        'poster' => $poster->url(),
        'attributes' => $attributes,
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
