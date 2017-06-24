var webpack = require('webpack');
var path = require('path');

var config = {
  entry: __dirname + '/src/index.js',
  // devtool: 'source-map', // ??
  output: {
    path: __dirname + '/lib',
    // publicPath: '/assets/',
    filename: 'n-ary.babel.js',
    // This part is dedicated to create a proper module:
    library: 'nAry',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devServer: {
    contentBase: __dirname
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      },
      // {
      //   test: /(\.jsx|\.js)$/,
      //   exclude: /node_modules/,
      //   use: [{
      //     loader: 'eslint-loader',
      //     // options:
      //   }]
      // }
    ]
  }
  // module: {
  //   loaders: [
  //     {
  //       test: /(\.jsx|\.js)$/,
  //       loader: 'babel',
  //       exclude: /(node_modules|bower_components)/
  //     },
  //     {
  //       test: /(\.jsx|\.js)$/,
  //       loader: "eslint-loader",
  //       exclude: /node_modules/
  //     }
  //   ]
  // },

  // resolve: {
  //   root: path.resolve('./src'),
  //   extensions: ['', '.js']
  // }
};

module.exports = config;
