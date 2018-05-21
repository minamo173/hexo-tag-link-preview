const util = require('hexo-util');
const ogs = require('open-graph-scraper');

const linkPreview = {
  getTag: async function (options, config) {
    return ogs(options)
      .then(function (result) {
        const ogp = result.data;
        let image = '';
        let descriptions = '';

        if (ogp.hasOwnProperty('ogImage')) {
          image += util.htmlTag('img', { src: ogp.ogImage.url } , '');
          image = util.htmlTag('div', { class: 'og-image'}, image);
        }

        descriptions += util.htmlTag('div', { class: 'og-title' }, ogp.ogTitle);

        if (ogp.hasOwnProperty('ogDescription')) {
          const description = ogp.ogDescription;

          if (description && description.length > config.descriptionLength) {
            description = description.slice(0, descriptionLength) + '…';
          }

          descriptions += util.htmlTag('div', { class: 'og-description' }, description);
        }

        descriptions = util.htmlTag('div', { class: 'descriptions' }, descriptions);

        const tag = util.htmlTag('div', { class: 'link-area' },  image + descriptions);
        
        return util.htmlTag('a', { href: options.url, class: config.className, target: options.target, rel: options.rel }, tag);
      })
      .catch(function (error) {
        console.log('error:', error);
        return '';
    });
  },
};

module.exports = linkPreview;