const merge = require('webpack-merge')
const core = require('./webpack.core')
const path = require('path')

module.exports = merge(core, {
  mode: 'production',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./build'),
    publicPath: '/hogwarts/public/',
  },
})
