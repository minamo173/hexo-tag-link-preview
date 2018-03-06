# hexo-tag-link-preview
generate a link preview from url on your [Hexo](https://hexo.io/) article.

## Installation

`npm install hexo-tag-link-preview`

or

`yarn add hexo-tag-link-preview`

## Usage
`{% linkPreview url %}`

Example:
```
{% linkPreview https://www.amazon.com/ %}
```

it generates HTML:

```html
<a href="https://www.amazon.com" class="link-preview" target="_blank" rel="noopener">
  <div class="link-area">
    <div class="og-image">
      <img src="http://g-ec2.images-amazon.com/images/G/01/social/api-share/amazon_logo_500500._V323939215_.png">
    </div>
    <div class="descriptions">
      <div class="og-title">Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs &amp; more</div>
      <div class="og-description">Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel &amp; accessories, shoes, jewelry, tools &amp; hardware, housewares, furniture, sporting goods, beauty &amp; personal care, broadband &amp; dsl, gourmet food &amp; just about anything else.</div>
    </div>
  </div>
</a>
```

## License
MIT