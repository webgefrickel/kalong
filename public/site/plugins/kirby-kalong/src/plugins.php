<?php

Kirby::plugin('kalong/image', [
  'fileMethods' => [
    'kalongBlurryInlinePlaceholder' => function($ratio = false) {
      $image = $this;
      // This is copied and modified from https://github.com/johannschopplich/kirby-blurry-placeholder
      // Copyright (c) 2020 Johann Schopplich
      // I just modified/combined the functions to also include/support focusCrop
      $pixelTarget = 60;
      $ratio = ($ratio !== false) ? $ratio : $image->ratio();
      $placeholderHeight = sqrt($pixelTarget / $ratio);
      $placeholderWidth = $pixelTarget / $placeholderHeight;
      $placeholderImage = $image->focusCrop($placeholderWidth, $placeholderHeight, ['quality' => 60]);
      $svgHeight = number_format($placeholderHeight, 2, '.', '');
      $svgWidth = number_format($placeholderWidth, 2, '.', '');

      // Wrap the blurred image in a SVG to avoid rasterizing the filter
      $svg = <<<EOD
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {$svgWidth} {$svgHeight}">
          <filter id="b" color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation=".5"></feGaussianBlur>
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="1 1"></feFuncA>
            </feComponentTransfer>
          </filter>
          <image filter="url(#b)" x="0" y="0" width="100%" height="100%" href="{$placeholderImage->dataUri()}"></image>
        </svg>
        EOD;

      // safely URL-encode
      $data = preg_replace('/\s+/', ' ', $svg);
      $data = preg_replace('/> </', '><', $data);
      $data = rawurlencode($data);
      $data = str_replace(['%20', '%2F', '%3A', '%3D'], [' ', '/', ':', '='], $data);

      return 'data:image/svg+xml;charset=utf-8,' . $data;
    },

    'kalongImage' => function($modifiers = '', $ratio = false, $sizes = '100vw') {
      $image = $this;
      $widths = option('thumbs.srcsets.default');
      $modifiers .= ($image->isLandscape()) ? ' image--landscape ' : ' image--portrait ';
      $alt = ($image->alt()->isEmpty()) ? $image->filename() : $image->alt();
      $title = ($image->title()->isEmpty()) ? false : $image->title();
      $caption = ($image->caption()->isEmpty()) ? false : $image->caption()->nl2br();
      $src = $image->kalongBlurryInlinePlaceholder($ratio);
      $srcset = $image->srcset();

      // if a ratio is set, we have to built the focusCrop srcset
      if ($ratio !== false) {
        $focusSrcsetConfig = [];
        foreach ($widths as $width) {
          $height = intval($width / $ratio);
          $format = 'webp';
          $focusSrcsetConfig[$width . 'w'] = compact('width', 'height', 'format');
        }
        $srcset = $image->focusSrcset($focusSrcsetConfig);
      }

      return [
        'modifiers' => $modifiers,
        'src' => $src,
        'alt' => $alt,
        'title' => $title,
        'caption' => $caption,
        'sizes' => $sizes,
        'source' => [
          'srcset' => $srcset,
          'type' => 'image/webp',
        ],
      ];
    },

    'kalongVideo' => function($modifiers) {
      $video = $this;
      $sources = [];

      $poster = ($video->poster()->isNotEmpty())
        ? $video->poster()->toFile()->resize(1920)->url() : null;
      $av1Video = ($video->av1()->isNotEmpty())
        ? $video->av1()->toFile()->url() : null;
      $attributes = ($video->attributes()->isNotEmpty())
        ? implode(' ', $video->attributes()->split()) : null;

      if ($av1Video) {
        $sources[] = [
          'src' => $av1Video,
          'type' => 'video/webm; codecs=av01.0.05M.08,opus',
        ];
      }
      $sources[] = [
        'src' => $video->url(),
        'type' => 'video/mp4',
      ];

      return [
        'modifiers' => $modifiers,
        'sources' => $sources,
        'poster' => $poster,
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
