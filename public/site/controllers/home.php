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

  // global page data
  $__['pageModifiers'] = 'template--home';
  $__['pageTitle'] = $page->kalongPageTitle();
  $__['pageDescription'] = $page->kalongPageDescription();

  $__['text'] = $page->text()->kirbytext();
  $__['mainImage'] = $mainImage;

  return $__;
};
