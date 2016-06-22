# panto-transformer-write
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

Write transformer for panto.

```js
panto.loadPlugin('write');

panto.pick('**/*.js').(panto.read()).(panto.write()).end();
```

[npm-url]: https://npmjs.org/package/panto-transformer-write
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-write.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-write
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-write.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-write#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-write/dev-status.svg