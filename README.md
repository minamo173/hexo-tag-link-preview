# hexo-tag-link-preview
Embed a link preview on your [Hexo](https://hexo.io/) article.

[![NPM](https://nodei.co/npm/hexo-tag-link-preview.png)](https://nodei.co/npm/hexo-tag-link-preview.js/)

[![npm](https://img.shields.io/npm/l/hexo-tag-link-preview.svg?style=flat-square)](LICENSE) 
[![npm](https://img.shields.io/npm/dt/hexo-tag-link-preview.svg?style=flat-square)](https://www.npmjs.com/package/hexo-tag-link-preview)
[![hexo](https://img.shields.io/badge/Hexo-%3E%3D3.0-blue.svg?style=flat-square)](https://hexo.io)
[![Dependency Status](https://gemnasium.com/badges/github.com/minamo173/hexo-tag-link-preview.svg)](https://gemnasium.com/github.com/minamo173/hexo-tag-link-preview)
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/codeclimate/codeclimate/maintainability)

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
<a href="https://www.amazon.com" class="link-preview">
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

### See also
+ [Above example HTML with CSS on CodePen](https://codepen.io/minamo173/pen/OQKJWX)

## Options
### className
You can provide top-level class name of this preview link HTML.  
(Default: `link-preview`)

### length
You can provide number of character in og-description.  
(Default: `140`)

### Example

_config.yml:

```yaml
linkPreview:
  className: sample
  length: 6
```

it generates:

```html
<a href="https://www.amazon.com" class="sample">
  <div class="link-area">
    <div class="og-image">
      <img src="http://g-ec2.images-amazon.com/images/G/01/social/api-share/amazon_logo_500500._V323939215_.png">
    </div>
    <div class="descriptions">
      <div class="og-title">Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs &amp; more</div>
      <div class="og-description">Online</div>
    </div>
  </div>
</a>
```

## License
MIT
