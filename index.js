const from = require('from2')

module.exports = basePackageJson

// Basic package.json readable stream
// obj -> stream
function basePackageJson (opts) {
  opts = opts || {}
  const _name = opts.name || '<name>'
  const _version = opts.version || '1.0.0'
  const _private = opts.private || false

  var called = false

  return from({ objectMode: true }, function (size, next) {
    if (called) return next(null, null)

    const res = { name: _name, version: _version }
    if (_private) res.private = true
    res.scripts = {}
    res.dependencies = {}
    res.devDependencies = {}

    called = true
    next(null, res)
  })
}
