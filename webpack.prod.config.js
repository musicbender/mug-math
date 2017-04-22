const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.jsx', 'json'],
  },
  entry: {
    index: [path.join(__dirname, '/src/index.jsx')],
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'dist.js',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.jsx*$/,
      include: path.join(__dirname, '/src'),
      loader: "babel-loader",
      exclude: /node_modules/,
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
      }),
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: {
          loader: "css-loader",
          options: {
            sourceMap: true,
          },
        },
        publicPath: "../",
      }),
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'ONSERVER': false,
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      filename: 'index.html',
      inject: 'body',
      title: 'Mug Math',
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, 'src/sw.js'),
      publicPath: '/',
      excludes: [
        '**/.*',
        '**/*.map',
        '*.html',
      ],
    }),
    new CopyWebpackPlugin([{
      from: 'src/manifest.json',
      to: 'manifest.json',
    }]),
    new FaviconsWebpackPlugin({
      logo: './src/assets/images/favicon.png',
      prefix: 'icons-[hash]/',
      emitStats: true,
      persisentCache: true,
      background: '#fff',
      inject: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
};

module.exports = config;
