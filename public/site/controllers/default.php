<?php

return function($page) {
  $__ = kalong(null, $page);

  // global page data
  $__['pageModifiers'] = 'template--default';
  $__['pageTitle'] = $page->kalongPageTitle();
  $__['pageDescription'] = $page->kalongPageDescription();

  // now, get your data from the page, pages, site or whatever
  // and add it to the data-array. that is all you have to do.
  $__['text'] = $page->text()->kirbytext();

  return $__;
};

