const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// 辅助函数
var utils = require('./utils');
var fullPath = utils.fullPath;
//var pickFiles = utils.pickFiles;


var ROOT_PATH = fullPath('../');		// 项目根路径
var SRC_PATH = ROOT_PATH + '/src';		// 项目源码路径
var DIST_PATH = ROOT_PATH + '/dist';	// 产出路径


var __DEV__ = process.env.NODE_ENV !== 'production';


const config = {
	//	entry: path.join(__dirname, '../src/main.js'),
	entry: {
		app: [SRC_PATH + '/main.js']
//		lib: [
//			'react', 'react-dom', 'react-router',
//			'redux', 'react-redux', 'redux-thunk'
//		],
	},
	output: {
//		path: path.join(__dirname, '../dist'),
//		publicPath: "/assets/",
//		filename: 'bundle.js'
		path: DIST_PATH,
    	// chunkhash 不能与 --hot 同时使用
    	// see https://github.com/webpack/webpack-dev-server/issues/377
    	filename: __DEV__ ? 'js/[name].js' : 'js/[name].[chunkhash].js',
    	chunkFilename: __DEV__ ? 'js/[name].js' : 'js/[name].[chunkhash].js'
  
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

module.exports = config;