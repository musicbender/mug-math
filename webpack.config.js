const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const PATHS = {
    src: './src/index.jsx',
    html: __dirname + '/src/index.html',
    dist: __dirname + '/dist',
    images: __dirname + '/src/assets/images/'
}

var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
      app: [
        PATHS.src,
      ],
      vendor: [
        'react',
        'react-dom',
      ],
    },
    output: {
        path: PATHS.dist,
        filename: 'dist.js',
    },
    module: {
        rules: [
            {
              test: /\.jsx?$/,
              include: __dirname + '/src',
              loader: "babel-loader",
              exclude: /node_modules/,
             },
            {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract("style-loader!css-loader!autoprefixer-loader!sass-loader")
            },
            {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract("style-loader!css-loader")
            }
        ]
    },
    plugins: [
      // new HtmlWebpackPlugin({
      //     template: PATHS.html,
      //     filename: 'index.html',
      //     inject: 'body',
      //     title: 'Mug Math'
      // }),
      new ServiceWorkerWebpackPlugin({
          entry: path.join(__dirname, 'src/sw.js'),
          excludes: [
          '**/.*',
          '**/*.map',
          '*.html'
          ]
      }),
      new CopyWebpackPlugin([
        {from: 'src/manifest.json', to: 'manifest.json'}
      ]),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: 'vendor.js',
      }),
      new webpack.DefinePlugin({
        'process.env': {
          CLIENT: JSON.stringify(true),
          'NODE_ENV': JSON.stringify('development'),
        }
      }),
    ],

    devServer: {
      historyApiFallback: true,
      port: 8085
    },

    watch: true
}

module.exports = config;
