const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
        test: /\.graphql$/,
      },
      {
        exclude: /node_modules/,
        loader: 'ts-loader',
        test: /\.ts$/,
      },
    ],
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.graphql'],
  },
  target: 'node',
};
