const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',

  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/app.js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-react', { runtime: 'automatic' }]],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/app.css',
    }),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
};
