var merge = require('webpack-merge')
var devEnv = require('./dev.env')
//setting
module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'
})
