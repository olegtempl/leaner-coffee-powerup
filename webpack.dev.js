const fs = require('fs');

const webpack = require('webpack');
const merge = require('webpack-merge');

const PACKAGE_JSON = require('./package.json');
const common = require('./webpack.common.js');

const Config = require('./config/config.dev.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      CONFIG: Config,
      VERSION: PACKAGE_JSON.version
    })
  ],

  devServer: {
    open: true,
    https: {
      key: fs.readFileSync('localhost.key'),
      cert: fs.readFileSync('localhost.cert')
    }
  }
});
