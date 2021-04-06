const path = require('path')
const webpack = require('webpack')
const fs = require('fs')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const appDirectory = fs.realpathSync(process.cwd())
// dll文件存放的目录
const vendorPath = path.resolve(appDirectory, 'public/static/js')

module.exports = {
  entry: {
    // 需要提取的库文件
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-router-config',
      'react-redux',
      'redux',
      'redux-thunk',
      'axios'
    ]
  },
  output: {
    path: vendorPath,
    filename: '[name].[hash].dll.js',
    // vendor.dll.js中暴露出的全局变量名
    // 保持与 webpack.DllPlugin 中名称一致
    library: '[name]_lib'
  },
  plugins: [
    // 清除之前的dll文件
    new CleanWebpackPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // 设置环境变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
    // manifest.json 描述动态链接库包含了哪些内容
    new webpack.DllPlugin({
      path: path.resolve(vendorPath, '[name]-manifest.json'),
      name: '[name]_lib',
      context: vendorPath
    })
  ]
}
