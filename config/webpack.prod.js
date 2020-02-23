const merge = require('webpack-merge')
const core = require('./webpack.core')

module.exports = merge(core, {
  mode: 'production'
})
