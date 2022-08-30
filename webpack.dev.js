const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  devServer: {
    port: 8001,
    open: true,
    historyApiFallback: true,
  },
});
