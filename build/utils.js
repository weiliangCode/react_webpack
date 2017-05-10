var glob = require('glob');			//用来匹配文件
var path = require('path');

/* 使用方法
pickFiles({
  id: /([^\/]+).js$/,
  pattern: './src/base/*.js',
});
*/
//匹配文件
exports.pickFiles = function(options) {
  var files = glob.sync(options.pattern);
  return files.reduce(function(data, filename) {
    var matched = filename.match(options.id);
    var name = matched[1];
    data[name] = path.resolve(__dirname, filename);
    return data;
  }, {}); 
};

//拼接路径
exports.fullPath = function(dir) {
  return path.resolve(__dirname, dir);
};

//获得电脑的IP地址
exports.getIP = function() {
  var os = require('os');
  var IPv4 = '127.0.0.1';
  var interfaces = os.networkInterfaces();
  for (var key in interfaces) {
    interfaces[key].some(function(details){
      if (details.family == 'IPv4' && key == 'en0') {
        IPv4 = details.address;
        return true;
      }
    });
  }
  return IPv4;
}