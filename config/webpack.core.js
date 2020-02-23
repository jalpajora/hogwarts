const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    outputPath: 'images/',
                    name: '[name].[ext]'
                }
            }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackAssetsManifest({
      publicPath: true,
      output: '../asset-manifest.json',
    }),
    new HTMLWebPackPlugin({
      template: 'index.html',
      favicon: path.resolve('./src/styles/images') + '/favicon.png',
    }),
    new MiniCssExtractPlugin({ filename: '[name].[hash].css'}),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
  },
};
