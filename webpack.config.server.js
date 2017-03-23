var fs = require('fs');
var path = require('path');
var ExternalsPlugin = require('webpack-externals-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const configServer = {

  entry: path.resolve(__dirname, 'server/server.js'),

  output: {
    path: __dirname + '/dist/',
    filename: 'server.bundle.js'
  },

  target: 'node',

  node: {
    __filename: true,
    __dirname: true,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'client',
      'node_modules',
    ],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            'es2015',
            'stage-0',
          ],
          plugins: [
            [
              'babel-plugin-webpack-loaders', {
                'config': './webpack.config.babel.js',
                "verbose": false
              }
            ]
          ]
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(["style-loader", "css-loader",
      "autoprefixer-loader", "sass-loader"])
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(["style-loader", "css-loader"])
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    // new ExternalsPlugin({
    //   type: 'commonjs',
    //   include: path.join(__dirname, './node_modules/'),
    // }),
  ],
};

module.exports = configServer;