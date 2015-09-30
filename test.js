const concat = require('concat-stream')
const test = require('tape')

const pkg = require('./')

test('should create a base package.json', function (t) {
  t.plan(1)
  pkg().pipe(concat({ object: true }, function (arr) {
    const obj = arr[0]
    t.deepEqual(obj, {
      name: '<name>',
      version: '1.0.0',
      scripts: {},
      dependencies: {},
      devDependencies: {}
    })
  }))
})

test('should accept options', function (t) {
  t.plan(1)
  const opts = { name: 'foo', version: '2.0.0', private: true }
  pkg(opts).pipe(concat({ object: true }, function (arr) {
    const obj = arr[0]
    t.deepEqual(obj, {
      name: 'foo',
      version: '2.0.0',
      private: true,
      scripts: {},
      dependencies: {},
      devDependencies: {}
    })
  }))
})
