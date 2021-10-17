const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  mode: 'development',
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: './',
    assetModuleFilename: "images/[name][ext][query]"
  },
  devServer: {
    static: path.resolve(__dirname, 'src'),
    hot: true,
    compress: true,
    port: 3001,
    host: '127.0.0.1',
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        include: path.resolve(process.cwd(), 'src'),
        enforce: 'pre',
        options: {
          fix: true,
        },
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin()
    ]
  }
}

