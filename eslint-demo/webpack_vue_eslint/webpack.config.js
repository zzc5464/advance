const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: __dirname + '/src/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /.vue$/,
        use: ['vue-loader']
      },
      {
        test: /.(vue|js)$/,
        use: ['eslint-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html'
    }), // 根据模版生成index文件
    new VueLoaderPlugin()
  ]
}