var path = require('path');
var webpack = require('webpack');

var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('development')
});

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: './public',
    port: 8080,
    stats: {colors: true}
  },
  entry: {
    index: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'app/index.js')
    ],
    vendor: [
      'react', 'react-dom', 'react-router',
      'redux', 'react-redux', 'redux-thunk'
    ]
  },

  output: {
    path: path.resolve(__dirname, './public'),
    filename: "[name].js",
    publicPath: '/'
  },

  resolve: {
    extension: ['', '.jsx', '.js', '.json']
  },

  devtool: 'source-map',
  'display-error-details': true,

  externals: [],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loaders: ['react-hot', 'babel'],
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
        // loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
        // loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      title: 'Captain',
      template: './app/index.html'
    }),
    new OpenBrowserPlugin({url: 'http://localhost:8080'})
    // new ExtractTextPlugin("app.css", {
    //   allChunks: true,
    //   disable: false
    // })
  ]
};
