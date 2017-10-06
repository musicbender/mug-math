const webpack = require('webpack');
const path = require('path');
const OfflinePlugin = require('offline-plugin');
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
    path: path.join(__dirname, '/dist/public'),
    filename: 'dist.js',
    publicPath: '/public',
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
        publicPath: "../public",
      }),
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'ONSERVER': false,
        'LIVE:': JSON.stringify(process.env.LIVE)
      }
    }),
    new OfflinePlugin({
      publicPath: '/',
      ServiceWorker: {
        navigateFallbackURL: '/offline.html'
      },
      externals: [
        '/',
        'static/offline.html',
        'static/manifest.json',
        'https://fonts.googleapis.com/icon?family=Material+Icons',
        'https://fonts.googleapis.com/css?family=Slabo+27px'
      ]
    }),
    new CopyWebpackPlugin([
      { from: 'static/*', to: './', flatten: true},
      { from: 'src/assets/favicons/*', to: 'favicons', flatten: true }
    ]),
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
