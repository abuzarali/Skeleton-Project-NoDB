//jshint esversion:6

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:['babel-polyfill', "webpack-dev-server/client?http://127.0.0.0:8080", './src/js/index.js'],
  output: {
    path:path.resolve(__dirname,'dist'),
    filename:'js/bundle.js'
  },
  devServer: {
    contentBase:'./dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test:/\.js$/,
        exclude: /node_modules/,
        use:{
          loader:'babel-loader'
        }
      }
    ]
  }
};
