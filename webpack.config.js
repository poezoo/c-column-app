const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');
const env = dotenv.config().parsed;
module.exports = {
  context: __dirname,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env),
    }),
  ],
};
