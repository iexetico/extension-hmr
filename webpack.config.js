const CrxLoadScriptWebpackPlugin = require('@cooby/crx-load-script-webpack-plugin')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const { resolve } = require('path')
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    static: { watch: false },
    client: {
      webSocketURL: 'ws://localhost:8080/ws',
    },
    allowedHosts: ['ya.ru'],
    devMiddleware: {
      writeToDisk: true,
    },
  },
  devtool: 'inline-source-map',
  entry: {
    background: [resolve(__dirname, 'background.js')],
    content: [resolve(__dirname, 'content.js')],
    'main-dom': [resolve(__dirname, 'main-dom.js')],
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'build'),
    clean: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CrxLoadScriptWebpackPlugin(),
    new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [
            { source: resolve(__dirname, 'manifest.json'), destination: resolve(__dirname, 'build/manifest.json') },
            { source: resolve(__dirname, 'index.html'), destination: resolve(__dirname, 'build/index.html') },
          ],
        },
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /mode_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
}
