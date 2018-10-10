/* eslint-env mocha */
'use strict'

const cheerio = require('cheerio')
const expect = require('chai').expect

const GOOGLE_URL = 'https://www.google.com/'

describe('Hexo Tag Link Preview', function() {
  const linkPreview = require('./../linkPreview.js')

  describe('linkPreview.getTag', function() {
    it('should return link preview tag', async () => {
      const options = {
        image: true,
        description: true,
        descriptionLength: 140,
        className: 'link-preview'
      }
      const linkPreviewTag = await linkPreview.getTag(GOOGLE_URL, options)
      // output html tag
      const html = cheerio.load(linkPreviewTag).html()

      expect(html).includes('<img')
      expect(html).includes('<a href="' + GOOGLE_URL + '" class="link-preview">')
    })

    it('should not have image tag', async () => {
      const options = {
        image: false,
        description: true,
        descriptionLength: 140,
        className: 'link-preview'
      }
      const linkPreviewTag = await linkPreview.getTag(GOOGLE_URL, options)
      // output html tag
      const html = cheerio.load(linkPreviewTag).html()

      expect(html).not.includes('<img')
      expect(html).includes('<a href="' + GOOGLE_URL + '" class="link-preview">')
    })

    it('should not have description tag', async () => {
      const options = {
        image: true,
        description: false,
        descriptionLength: 140,
        className: 'link-preview'
      }
      const linkPreviewTag = await linkPreview.getTag(GOOGLE_URL, options)
      // output html tag
      const html = cheerio.load(linkPreviewTag).html()

      expect(html).includes('<img')
      expect(html).not.includes('<div class="og-description">')
      expect(html).includes('<a href="' + GOOGLE_URL + '" class="link-preview">')
    })
  })
})
