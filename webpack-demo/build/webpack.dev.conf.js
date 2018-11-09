const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf');
const devConfig =  merge(baseWebpackConfig,{
  mode: 'development',
  optimization: {
  
  },  
  devServer: {
    // contentBase: path.join(__dirname, 'dist'), // 服务器使用的文件，一般是dist目录
    compress: true, // 代码压缩
    port: 1234,
    // hot: true,
    // open: true,
    // historyApiFallback: true,
    // overlay:{ // 在浏览器展示错误日志
    //   errors:true,
    //   warnings:false
    // },
    // quite: true // true，则终端输出的只有初始启动信息。 webpack 的警告和错误是不输出到终端的。
  }
})
module.exports = devConfig