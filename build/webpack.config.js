const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/eg-ui.js']
    // input: './src/components/input/index.js',
    // box: './src/components/box/index.js'
  },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    filename: 'index.js',
    libraryExport: 'default',
    library: 'EG-UI',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, '../src/common/')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
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
    new VueLoaderPlugin()
  ],
}
