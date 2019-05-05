<?php

return function($page) {
  $data = kalong();

  // now, get your data from the page, pages, site or whatever
  // and add it to the data-array. that is all you have to do.
  $data['text'] = $page->text()->kirbytext();

  return $data;
};

