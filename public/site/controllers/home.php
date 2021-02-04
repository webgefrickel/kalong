<?php return function($page) {
  $__ = kalong();

  // now, get your data from the page, pages, site or whatever
  // and add it to the __-data-array. that is all you have to do.
  // have a look at /site/plugins/kirby-kalong/src/plugins.php
  // and data.php
  $imageTest = $page
    ->gallery()
    ->first()
    ->toFile()
    ->kalongImage('image--with-test-class');

  $videoTest = $page
    ->videos()
    ->first()
    ->kalongVideo('video--with-test-class');

  // global page data
  $__['pageModifiers'] = 'template--home';
  $__['pageTitle'] = $page->kalongPageTitle();
  $__['pageDescription'] = $page->kalongPageDescription();

  $__['text'] = $page->text()->kirbytext();
  $__['imageTest'] = $imageTest;
  $__['videoTest'] = $videoTest;

  return $__;
};
