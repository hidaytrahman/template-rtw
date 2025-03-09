// not in used - its for just development in simple configuration
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development', // Set mode to 'development' or 'production'
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.[contenthash].js',
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			"components/*": ["./src/components/*"]
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		historyApiFallback: true, // enabled to handle client-side routing.
		hot: true,
		compress: true,
		port: 3000,
	},
};