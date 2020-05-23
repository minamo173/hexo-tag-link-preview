'use strict';

const util = require('hexo-util');
const ogs = require('open-graph-scraper');
const escapeHTML = require('escape-html');

module.exports = async function(options) {
  const config = this.config;
  return ogs(options)
    .then(function (result) {
      const ogp = result.data;
      let image = '';
      let descriptions = '';

      if (ogp.hasOwnProperty('ogImage') && ogp.ogImage.url) {
        image += util.htmlTag('img', { src: ogp.ogImage.url } , '');
        image = util.htmlTag('div', { class: 'og-image'}, image, false)
      }

      descriptions += util.htmlTag('div', { class: 'og-title' }, escapeHTML(ogp.ogTitle), false);

      if (ogp.hasOwnProperty('ogDescription')) {
        const description = (ogp.ogDescription && ogp.ogDescription.length > config.linkPreview.descriptionLength) ?
          ogp.ogDescription.slice(0, config.linkPreview.descriptionLength) + '…' : ogp.ogDescription;
        descriptions += util.htmlTag('div', { class: 'og-description' }, escapeHTML(description), false);
      }

      descriptions = util.htmlTag('div', { class: 'descriptions' }, descriptions, false);

      const tag = util.htmlTag('div', { class: 'link-area' },  image + descriptions, false);
      return util.htmlTag('a', { href: options.url, class: config.className, target: options.target, rel: options.rel }, tag, false);
    })
    .catch(function (error) {
      console.log('error:', error);
      return '';
  });
}
