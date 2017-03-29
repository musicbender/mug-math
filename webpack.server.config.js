const webpack = require('webpack');
const path = require('path');

const node_env = process.env.NODE_ENV || 'dev';

module.exports = {
  devtool: node_env == 'production' ? false : "#source-map",
  target: "node",
  cache: false,
  context: __dirname,
  resolve: {
    alias: {
			"~": path.join(__dirname, './src')
		},
    extensions: ['.js', '.jsx', '.json']
  },
  entry: path.join(__dirname, './server/server.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'server.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        // loader: "babel-loader",
        loaders: ["babel-loader?presets[]=es2015&presets[]=stage-0&presets[]=react"],
        exclude: /(node_modules|bower_components)/
      }, {
        test: /\.scss$/,
        loader: 'css-loader/locals?modules&loacalIdentName=[name]--[local]--[hash:base64:5]!sass-loader'
        // loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      // http://stackoverflow.com/a/35372706/2177568
      // for server side code, just require, don't chunk
      // use `if (ONSERVER) { ...` for server specific code
      ONSERVER: true
    })
  ]
}
