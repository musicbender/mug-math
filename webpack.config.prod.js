const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const PATHS = {
    src: './src/index.jsx',
    html: __dirname + '/src/index.html',
    dist: __dirname + '/dist',
    images: __dirname + '/src/assets/images/'
}

var config = {
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
        loaders: [
            { test: /\.jsx?$/, include: __dirname + '/src', loader: "babel-loader" },
            { test: /\.scss$/, loader: "style-loader!css-loader!autoprefixer-loader!sass-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" }
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
      new FaviconsWebpackPlugin({
          logo: PATHS.images + 'favicon.png',
          title: 'Cold Drip Timer',
          prefix: 'assets/',
          statsFilename: 'icon-stats.json'
      }),
      new CopyWebpackPlugin([
        {
          from: 'src/manifest.json',
          to: 'manifest.json'
        }
      ]),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: 'vendor.js',
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
        }
      }),
      new CompressionPlugin({
          test: /\.(js|html)$/,
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
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
