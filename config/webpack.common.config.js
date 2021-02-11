const path = require('path')
const HtmlWebpackPlugun = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    main: {
      import: './src/index.js',
      dependOn: 'shared'
    },
    shared: './src/js/so.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './js/[name].[contenthash].js'
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.ts', '.scss', '.css']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: './css/style.[chunkhash].css'
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: './src/assets/',
    //       to: './assets/'
    //     }
    //   ]
    // }),
    new HtmlWebpackPlugun({
      title: 'Webpack Revisão',
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['main', 'shared'],
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.(s?css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-es6-template-loader'
      }
    ]
  }
}