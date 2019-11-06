const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src', 'main.ts'),
  externals: [nodeExternals()],
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
});
