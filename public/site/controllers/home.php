<?php

return function($page) {
  $data = kalong(null, $page);

  // now, get your data from the page, pages, site or whatever
  // and add it to the data-array. that is all you have to do.
  $data['text'] = $page->text()->kirbytext();
  $data['pageModifiers'] = 'template--home';
  $data['pageDescription'] = kirby()->site()->seodescription();
  return $data;
};

