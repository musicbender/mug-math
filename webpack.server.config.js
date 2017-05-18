const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  target: "node",
  cache: false,
  context: __dirname,
  resolve: {
    alias: {
	     "~": path.join(__dirname, './src'),
	  },
    extensions: ['.js', '.jsx', '.json']
  },
  entry: path.join(__dirname, './server/server.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'server.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["babel-loader?presets[]=es2015&presets[]=stage-0&presets[]=react"],
        exclude: /(node_modules|bower_components)/,
      }, {
        test: /\.scss$/,
        loader: 'css-loader/locals?modules&loacalIdentName=[name]--[local]--[hash:base64:5]!sass-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      ONSERVER: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
};
