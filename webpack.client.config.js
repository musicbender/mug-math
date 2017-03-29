const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
// const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const node_env = process.env.NODE_ENV || 'dev';

const PATHS = {
    entry: './src/index.jsx',
    html: __dirname + '/src/index.html',
    dist: __dirname + '/dist',
    images: __dirname + '/src/assets/images/'
}

var config = {
    devtool: node_env == 'production' ? false : "#eval-source-map",
    resolve: {
      extensions: ['.js', '.jsx', 'json']
    },
    entry: PATHS.entry,
    output: {
        path: PATHS.dist,
        filename: 'dist.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
              test: /\.jsx*$/,
              include: __dirname + '/src',
              loader: "babel-loader",
              exclude: /node_modules/,
             },
            {
              test: /\.scss$/,
              loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
            },
            {
              test: /\.css$/,
              loader: "style-loader!css-loader"
            }
        ]
    },
    plugins: [
      new webpack.DefinePlugin({
        ONSERVER: false
      }),
      new HtmlWebpackPlugin({
          template: PATHS.html,
          filename: 'index.html',
          inject: 'body',
          title: 'Mug Math'
      }),
      // new ServiceWorkerWebpackPlugin({
      //     entry: path.join(__dirname, 'src/sw.js'),
      //     excludes: [
      //     '**/.*',
      //     '**/*.map',
      //     '*.html'
      //     ]
      // }),
      // new CopyWebpackPlugin([
      //   {from: 'src/manifest.json', to: 'manifest.json'}
      // ]),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'vendor',
      //   minChunks: Infinity,
      //   filename: 'vendor.js',
      // }),
      new ExtractTextPlugin({
  			filename: 'style.css',
  			allChunks: true
  		})
    ],
    devServer: {
      historyApiFallback: true,
      port: 8087
    },
    watch: true
}

module.exports = config;
