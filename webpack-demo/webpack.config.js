const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
        ]
      },
      {
        test: /.vue$/,
        use: [
          {loader: 'vue-loader'}
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(), // vue-loader v14 以上一定要引入这个插件
    new HtmlWebpackPlugin({
      template: './template.html'
    }), // 根据模版生成index文件
  ]
}