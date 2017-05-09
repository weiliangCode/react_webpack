const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');


webpack(webpackConfig, function(err, stats) {
//  spinner.stop()
    if (err) throw err
//  process.stdout.write(stats.toString({
//      colors: true,
//      modules: false,
//      children: false,
//      chunks: false,
//      chunkModules: false
//  }) + '\n')
	console.log('打包完成')
})
