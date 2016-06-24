var path = require('path');
var webpack = require('webpack');

var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __RELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_RELEASE || 'false'))
});

module.exports = {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      contentBase: './build',
      port: 8080,
      stats: { colors: true }
    },
    entry: {
      index: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/index.js')
      ],
      vendor: ['react', 'react-dom']
    },
    
    output: {
        path: path.resolve(__dirname, 'build'),
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
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
      new HtmlWebpackPlugin({
        title: 'Captain',
        template: './app/index.html',
      }),
      new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
      new ExtractTextPlugin("main.css", {
          allChunks: true,
          disable: false
      }),
    ]
};
