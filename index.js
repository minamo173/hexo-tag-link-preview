/**
* hexo-tag-link-preview
* https://github.com/superalsrk/hexo-pdf.git
* Copyright (c) 2018, minamo
* Licensed under the MIT license.
* Syntax:
* {% linkPreview https://www.amazon.com/ %}
**/

'use strict';
const getTag = require('./lib/generator');

hexo.config.linkPreview = Object.assign({
  descriptionLength: typeof hexo.config.linkPreview === 'undefined' ? 140 : hexo.config.linkPreview.descriptionLengt,
  className: typeof hexo.config.linkPreview.className === 'undefined' ? 'link-preview' : hexo.config.linkPreview.className,
}, hexo.config.linkPreview);

hexo.extend.tag.register('linkPreview', function(args) {
  return getTag({url: args[0], target: args[1], rel: args[2]}).then(tag => {
    return tag;
  });
}, {async: true});
