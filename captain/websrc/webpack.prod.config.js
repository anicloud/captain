'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
});

module.exports = {
  entry: {
    index: [
      path.resolve(__dirname, 'app/index.js')
    ],
    vendor: [
      'react', 'react-dom', 'react-router',
      'redux', 'react-redux', 'react-router-redux'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "[name].[hash:8].js",
    publicPath: '/public/'
  },
  resolve: {
    extension: ['', '.jsx', '.js', '.json'],
    root: [
      path.resolve(__dirname, 'app')
    ],
    alias: {
    }
  },
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.js[x]?$/,
        loaders: ['babel'],
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.less/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000"
      }
    ]
  },
  plugins: [
    definePlugin,
    new HtmlWebpackPlugin({
      title: 'Captain',
      template: './app/index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash:8].js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin("app.[hash:8].css", {
      allChunks: true
    })
  ]
};
