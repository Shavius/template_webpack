const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let mode = 'development';
let devtool = 'source-map';

if (process.env.NODE_ENV === 'production') {
	mode = 'production';
	devtool = 'none';
}

module.exports = {
	mode: mode,
	devtool: devtool,

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

	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		client: {
			overlay: true,
		},
		port: 3000,
		hot: true,
	}
}
