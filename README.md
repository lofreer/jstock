# jstock

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

A pure js library for calculating MACD/KDJ/....

```
const jstock = require('jstock')

let close = [1, 2, 3, 4]
let high = [2, 3, 4, 5]
let low = [0, 1, 2, 3]
jstock.ma(close,  5)
jstock.ema(close, 5)
jstock.wma(close, 5)
const {dif, dea, bar} = jstock.macd(close, 12, 26, 9)
const {mb, up, bn} = jstock.boll(close, 20)
const {k, d, j} = jstock.kdj(close, high, low, 20)
```

[npm-image]: https://img.shields.io/npm/v/jstock.svg?style=flat-square
[npm-url]: https://npmjs.org/package/jstock
[github-tag]: http://img.shields.io/github/tag/koajs/csv.svg?style=flat-square
[github-url]: https://github.com/quick-sort/jstock/tags
[travis-image]: https://img.shields.io/travis/quick-sort/jstock.svg?style=flat-square
[travis-url]: https://travis-ci.org/quick-sort/jstock
[coveralls-image]: https://img.shields.io/coveralls/quick-sort/jstock.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/quick-sort/jstock?branch=master
[license-image]: http://img.shields.io/npm/l/jstock.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/jstock.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/jstock
