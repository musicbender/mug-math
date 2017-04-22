const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

const config = {
  devtool: 'eval',
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
      loader: "style-loader!css-loader!autoprefixer-loader!sass-loader",
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader",
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
         ONSERVER: false,
        'NODE_ENV': JSON.stringify('development'),
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
      publicPath: './',
      excludes: [
        '**/.*',
        '**/*.map',
        '*.html',
      ],
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 8087,
  },
  watch: true,
};

module.exports = config;