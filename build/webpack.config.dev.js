const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-webpack-plugin')

module.exports = {
  mode: "development",
  entry: {
    demo: ['./example/main.js']
  },
  output: {
    path: path.resolve(process.cwd(), './example/dev'),
    filename: '[name].[hash:7].js'
  },
  resolve: {
    extensions: ['.js', '.vue', 'json'],
    alias: {
      '@': path.resolve(process.cwd(), './src')
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 18089,
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
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
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
