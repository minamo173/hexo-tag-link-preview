/**
* hexo-tag-link-preview
* https://github.com/superalsrk/hexo-pdf.git
* Copyright (c) 2018, minamo
* Licensed under the MIT license.
* Syntax:
* {% linkPreview https://www.amazon.com/ %}
**/

'use strict';
const linkPreview = require('./linkPreview.js')

const descriptionLength = (hexo.config.linkPreview && hexo.config.linkPreview.descriptionLength)
                            ? hexo.config.linkPreview.descriptionLength : 140;
const className = (hexo.config.linkPreview && hexo.config.linkPreview.className)
                    ? hexo.config.linkPreview.className : 'link-preview';

const config = {
  descriptionLength: descriptionLength,
  className: className
}

hexo.extend.tag.register('linkPreview', function(args) {
  return linkPreview.getTag({url: args[0], target: args[1], rel: args[2]}, config).then(tag => {
    return tag;
  });
}, {async: true});
