var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
//setting export
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
