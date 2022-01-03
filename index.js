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
const { config } = hexo;

hexo.config.linkPreview = Object.assign({
  descriptionLength: hasDescriptionLength() ? config.linkPreview.descriptionLength : 140,
  className: hasClassName() ? config.linkPreview.className : 'link-preview',
}, config.linkPreview);

hexo.extend.tag.register('linkPreview', function(args) {
  return getTag({
    url: args[0],
    target: args[1],
    rel: args[2],
    descriptionLength: config.linkPreview.descriptionLength,
    className: config.linkPreview.className,
  }).then(tag => {
    return tag;
  });
}, {async: true});

function hasDescriptionLength() {
  return config.linkPreview && config.linkPreview.descriptionLength;
}

function hasClassName() {
  return config.linkPreview && config.linkPreview.className;
}
