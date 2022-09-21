const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  plugins: [new miniCssExtractPlugin()],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/assets')
  },
  devServer: {
    static: path.resolve(__dirname, 'public/assets'),
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        mimetype: 'image/svg+xml',
        scheme: 'data',
        type: 'asset/resource',
        generator: {
          filename: 'icons/[hash].svg'
        }
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            // loader: 'style-loader'
            loader: miniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            // options: {
            //   postcssOptions: {
            //     plugins: () => [
            //       require('autoprefixer')
            //     ]
            //   }
            // }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}