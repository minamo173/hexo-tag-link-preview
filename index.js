/**
* hexo-tag-link-preview
* https://github.com/superalsrk/hexo-pdf.git
* Copyright (c) 2018, minamo
* Licensed under the MIT license.
* Syntax:
* {% linkPreview https://www.amazon.com/ %}
**/

'use strict';
const util = require('hexo-util');
const ogs = require('open-graph-scraper');

hexo.extend.tag.register('linkPreview', function(args) {
  return getTag({url: args[0]}).then(tag => {
    return tag;
  });
}, {async: true});

async function getTag(options) {
  return ogs(options)
    .then(function (result) {
      const ogp = result.data;
      let image = '';
      let descriptions = '';
      
      if (ogp.hasOwnProperty('ogImage')) {
        image += util.htmlTag('img', { src: ogp.ogImage.url } , '');
        image = util.htmlTag('div', { class: 'og-image'}, image)
      }

      descriptions += util.htmlTag('div', { class: 'og-title' }, ogp.ogTitle);

      if (ogp.hasOwnProperty('ogDescription')) {
        descriptions += util.htmlTag('div', { class: 'og-description' }, ogp.ogDescription);
      }

      descriptions = util.htmlTag('div', { class: 'descriptions' }, descriptions);

      const tag = util.htmlTag('div', { class: 'link-area' },  image + descriptions);
      return util.htmlTag('a', { href: options.url, class: 'link-preview' }, tag);
    })
    .catch(function (error) {
      console.log('error:', error);
      return '';
  });
}