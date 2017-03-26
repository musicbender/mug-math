const webpack = require('webpack');
// builtin node path module
const path = require('path');

const node_env = process.env.NODE_ENV || 'dev';

module.exports = {
	devtool: node_env == 'prod' ? false : "#source-map",
	target: "node",
	cache: false,
	context: __dirname,
	resolve: {
		alias: {
			"~": path.join(__dirname, './src')
		},
		extensions: ['.js', '.jsx']
	},
	entry: path.join(__dirname, './server/server.js') ,
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'server.bundle.js',
	},
	module: {
		loaders: [
		{
      test: /\.jsx?$/,
      include: __dirname + '/src',
      loader: "babel-loader",
      exclude: /node_modules/,
		},
    {
			test: /\.scss$/,
      loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
    }
	},
	plugins: [
		new webpack.DefinePlugin({
            // http://stackoverflow.com/a/35372706/2177568
            // for server side code, just require, don't chunk
            // use `if (ONSERVER) { ...` for server specific code
            ONSERVER: true
        })
	],
}
