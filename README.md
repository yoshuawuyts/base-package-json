# simple-package-json
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Simple package.json readable stream. Sets the minimum amount of properties to
satisfy `npm`. Easy to extend, useful for code generators.

## Installation
```sh
$ npm install simple-package-json
```

## Usage
```js
const package = require('simple-package-json')
const through = require('through2')

package({ name: 'my-package' })
  .pipe(through({ objectMode: true }, (obj, enc, cb) => {
    obj.dependencies.rimraf = '2.4.3'
    obj.description = 'My great description'
    cb(null, obj)
  }))
```

## API
### package(opts)
Create a blank `package.json`. By default it sets `name`, `version`, `scripts`,
`dependencies` and `devDependencies`.

The following options are accepted:
- __name__: the module name. Defaults to `<name>`.
- __version__: the module version. Defaults to `1.0.0`.
- __private__: if the module is publishable. It should be set to `false` for
  applications. Defaults to `undefined` (e.g. will not set).

## See Also
- [simple-html-index](https://github.com/mattdesl/simple-html-index)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/simple-package-json.svg?style=flat-square
[npm-url]: https://npmjs.org/package/simple-package-json
[travis-image]: https://img.shields.io/travis/yoshuawuyts/simple-package-json/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/simple-package-json
[codecov-image]: https://img.shields.io/codecov/c/github/yoshuawuyts/simple-package-json/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yoshuawuyts/simple-package-json
[downloads-image]: http://img.shields.io/npm/dm/simple-package-json.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/simple-package-json
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
