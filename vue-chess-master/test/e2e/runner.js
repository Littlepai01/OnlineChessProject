//setting test
process.env.NODE_ENV = 'testing'
var server = require('../../build/dev-server.js')

var spawn = require('cross-spawn')
var runner = spawn(
  './node_modules/.bin/nightwatch',
  [
    '--config', 'test/e2e/nightwatch.conf.js',
    '--env', 'chrome,firefox'
  ],
  {
    stdio: 'inherit'
  }
)

runner.on('exit', function (code) {
  server.close()
  process.exit(code)
})

runner.on('error', function (err) {
  server.close()
  throw err
})
