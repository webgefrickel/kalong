<?php

return function($page) {
  $__ = kalong();

  // global page data
  $__['pageModifiers'] = 'template--error';
  $__['pageTitle'] = $page->kalongPageTitle();
  $__['pageDescription'] = $page->kalongPageDescription();

  // now, get your data from the page, pages, site or whatever
  // and add it to the data-array. that is all you have to do.
  $__['text'] = $page->text()->kirbytext();

  return $__;
};

