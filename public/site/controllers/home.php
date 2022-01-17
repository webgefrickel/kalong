<?php return function($page) {
  $__ = kalong();

  // global page data, SEO stuff etc.
  $__['pageModifiers'] = 'template--home';
  $__['pageTitle'] = $page->kalongPageTitle();
  $__['pageDescription'] = $page->kalongPageDescription();

  // now, get your data from the page, pages, site or whatever
  // and add it to the __-data-array. that is all you have to do.
  // have a look at /site/plugins/kirby-kalong/src/plugins.php
  // and data.php
  $imageTest = $page
    ->homeimages()
    ->first()
    ->toFile()
    ->kalongImage('image--with-test-class');

  $videoTest = $page
    ->homevideos()
    ->first()
    ->toFile()
    ->kalongVideo('video--with-test-class');

  $__['text'] = $page->text()->kirbytext();
  $__['imageTest'] = $imageTest;
  $__['videoTest'] = $videoTest;

  return $__;
};
