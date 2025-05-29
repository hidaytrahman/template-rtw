const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // For better debugging
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: true, // Handle client-side routing
    hot: true, // Enable Hot Module Replacement (HMR)
    compress: true,
    port: 3000,
  },
});