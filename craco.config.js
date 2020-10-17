const CracoLessPlugin = require('craco-less')
// inject webpack config
// https://www.npmjs.com/package/@craco/craco
const antdTheme = require('./antd-theme')
const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

const appDirectory = fs.realpathSync(process.cwd())

const vendorPath = path.resolve(appDirectory, 'public/static/js')
const PUBLIC_URL = process.env.PUBLIC_URL || '/'

module.exports = {
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true
        }
      ]
    ]
    // loaderOptions: (babelLoaderOptions, { env, paths }) => {
    //   return babelLoaderOptions
    // }
  },
  webpack: {
    plugins: setPlugins(),
    configure: (webpackConfig, { env, paths }) => {
      /* Any webpack configuration options: https://webpack.js.org/configuration */

      // console.log('process.env.BUILD_ENV', process.env.BUILD_ENV)
      // 添加html 模版参数 BUILD_ENV 环境变量
      webpackConfig.plugins[0].options = {
        ...webpackConfig.plugins[0].options,
        BUILD_ENV: process.env.BUILD_ENV || webpackConfig.mode
      }
      return webpackConfig
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: antdTheme,
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}

// dll 插件
function setPlugins() {
  return process.env.NODE_ENV === 'production'
    ? [
        new webpack.DllReferencePlugin({
          context: vendorPath,
          manifest: require(path.resolve(vendorPath, 'vendor-manifest.json'))
        }),
        new AddAssetHtmlPlugin({
          filepath: path.resolve(__dirname, './public/static/js/*.dll.js'),
          outputPath: './static/js',
          publicPath: PUBLIC_URL + 'static/js'
        })
      ]
    : []
}
