const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');

const PACKAGE_JSON = require('./package.json');
const common = require('./webpack.common.js');

const Config = require('./config/config.prod.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      CONFIG: Config,
      VERSION: PACKAGE_JSON.version
    }),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20
    })
  ],

  optimization: {
    minimizer: [new TerserPlugin({
      sourceMap: true,
      parallel: true
    })]
  }
});
