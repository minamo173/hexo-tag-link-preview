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
  const options = args[1];
  mergeConfig(config, options);
  return linkPreview.getTag(args[0], config).then(tag => {
    return tag;
  });
}, {async: true});

function mergeConfig(config, options) {
  for (const key in options) {
    if (options.hasOwnProperty(key)) {
      config[key] = options[key];
    }
  }
}