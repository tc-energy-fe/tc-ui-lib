const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-webpack-plugin')

module.exports = {
  mode: "development",
  entry: {
    demo: './example/main.js'
  },
  output: {
    path: path.resolve(process.cwd(), './example/dev'),
    filename: '[name].[hash:7].js'
  },
  resolve: {
    extensions: ['.js', '.vue', 'json'],
    alias: {
      '@': path.resolve(process.cwd(), './src'),
      'common': path.resolve(process.cwd(), './src/common')
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 8089,
    publicPath: '/',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              prependData: '@import "common/var.scss";'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './example/index.html',
    }),
    new ProgressBarPlugin(),
    new VueLoaderPlugin()
  ],
}
