'use strict';

var path = require('path');
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
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
      'redux', 'react-redux', 'react-router-redux', 'redux-thunk',
      'lodash', 'reqwest'
    ]
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: "[name].[hash:8].js",
    publicPath: '/public'
  },
  resolve: {
    extension: ['', '.jsx', '.js', '.json'],
    alias: {
    }
  },
  externals: {
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loaders: ['babel'],
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
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
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Captain',
      template: './app/index.html'
    }),
    new webpack.optimize.MinChunkSizePlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1.5,
      moveToParents: true
    }),
    new ExtractTextPlugin("app.[hash:8].css", {
      allChunks: true
    })
  ]
};
