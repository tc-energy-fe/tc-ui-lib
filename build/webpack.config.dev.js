const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-webpack-plugin')

module.exports = {
  mode: "development",
  entry: './example/main.js',
  output: {
    path: path.resolve(process.cwd(), './example/dev'),
    filename: '[name].[hash:7].js',
  },
  resolve: {
    extensions: ['.js', '.vue', 'json']
  },
  devServer: {
    host: '0.0.0.0',
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
        use: ['sass-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './example/index.html',
      filename: 'demo.html',
    }),
    new ProgressBarPlugin(),
    new VueLoaderPlugin()
  ],
}
