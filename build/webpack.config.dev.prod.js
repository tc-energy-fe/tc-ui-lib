const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const extraCSS = new ExtractTextPlugin({
  filename: 'css/[name].[md5:contenthash:hex:7].css',
  allChunks: true
})

module.exports = {
  mode: 'production',
  entry: {
    index: ['./example/main.js']
  },
  output: {
    path: path.resolve(process.cwd(), './dist'),
    publicPath: './',
    filename: 'js/[name].[hash:7].js'
  },
  resolve: {
    extensions: ['.js', '.vue', 'json'],
    alias: {
      '@': path.resolve(process.cwd(), './src'),
      'common': path.resolve(process.cwd(), './src/common')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(process.cwd(), './src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: extraCSS.extract([
          // {
          //   loader: 'style-loader'
          // },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              prependData: '@import "common/var.scss";'
            }
          }
        ])
      },
      {
        test: /\.css$/,
        use: extraCSS.extract([
          'style-loader',
          'css-loader'
        ]),
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './example/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    extraCSS,
    new VueLoaderPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
