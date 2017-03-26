const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  output: {
    publicPath: '/',
    libraryTarget: 'commonjs2',
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
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader" , "autoprefixer-loader", "sass-loader"]
        })
       }
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   loader: ExtractTextPlugin.extract("style-loader!css-loader")
      // }
    ],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};
