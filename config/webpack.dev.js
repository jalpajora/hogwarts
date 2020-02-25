const merge = require('webpack-merge')
const core = require('./webpack.core')

module.exports = merge(core, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true,
    openPage: 'hogwarts'
  }
})
