<?php return function($page) {
  $__ = kalong(null, $page);

  // now, get your data from the page, pages, site or whatever
  // and add it to the data-array. that is all you have to do.
  // we use kalong to get the default data (config, styleguide-vars etc)
  $mainImage = $page
    ->gallery()
    ->first()
    ->toFile()
    ->kalongImage();

  $customImage = $page
    ->gallery()
    ->first()
    ->toFile()
    ->kalongImage(
      'custom-image-class',
      '(min-width: 960px) 67vw, 100vw',
      9/16,
      false
    );

  $__['pageModifiers'] = 'template--home';
  $__['pageDescription'] = kirby()->site()->seodescription();
  $__['text'] = $page->text()->kirbytext();
  $__['mainImage'] = $mainImage;
  $__['customImage'] = $customImage;

  return $__;
};
