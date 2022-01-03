'use strict';

const Hexo = require('hexo');
let result;

beforeAll(async() => {
  const hexo = new Hexo(__dirname, {silent: true });
  hexo.init();
  hexo.config.linkPreview = {
    descriptionLength: 6,
    className: 'link-preview'
  };

  const generator = require('../lib/generator').bind(hexo);
  result = await generator({
    url: 'https://ogp.me/',
    target: '_blank',
    rel: 'nofollow',
    className: 'link-preview',
    descriptionLength: 6,
  });
});

test('get link preview from https://ogp.me/', async() => {
  expect(result).toBe(
    '<a href="https://ogp.me/" class="link-preview" target="_blank" rel="nofollow"><div class="link-area"><div class="og-image"><img src="https://ogp.me/logo.png"></img></div><div class="descriptions"><div class="og-title">Open Graph protocol</div><div class="og-description">The Op…</div></div></div></a>'
  );
});
