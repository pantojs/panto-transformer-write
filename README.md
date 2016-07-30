# panto-transformer-write
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]

Write transformer for panto.

```js
panto.loadTransformer('write');

panto.pick('**/*.js').read().write({
    destname: file => file.filename
});
```

## options
 - destname: function|string

[npm-url]: https://npmjs.org/package/panto-transformer-write
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-write.svg
[npm-image]: http://img.shields.io/npm/v/panto-transformer-write.svg
[travis-url]: https://travis-ci.org/pantojs/panto-transformer-write
[travis-image]: http://img.shields.io/travis/pantojs/panto-transformer-write.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-write
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-write.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-write#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-write/dev-status.svg
[coveralls-image]:https://coveralls.io/repos/github/pantojs/panto-transformer-write/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/pantojs/panto-transformer-write?branch=master
