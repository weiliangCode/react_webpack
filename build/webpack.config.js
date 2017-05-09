const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: path.join(__dirname, '../src/main.js'),
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
	        	test: /\.js[x]?$/,
	        	exclude: /node_modules/,
	        	loader: 'react-hot-loader!babel-loader'
	      	}, 
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /\.css/,
				loader: 'style-loader!css-loader'
			}
		]
	},
	//插件项
	plugins: [

		new HtmlWebpackPlugin({
			filename: 'index.html', //可以省略不写
			template: path.join(__dirname, '../src/index.html'),
		})

	]
}