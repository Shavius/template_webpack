const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
    mode: mode,

    entry: path.resolve(__dirname, 'src', 'js/script.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'js/script.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        })
    ],

    module: {
        rules: [
          {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
        ],
      },
}
