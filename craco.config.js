// inject webpack config
// https://www.npmjs.com/package/@craco/craco
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
    },
    alias: {
      // 文件路径别名
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@services': path.resolve(__dirname, 'src/models/services'),
      '@actions': path.resolve(__dirname, 'src/store/actions'),
      '@reducers': path.resolve(__dirname, 'src/store/reducers'),
      '@constant': path.resolve(__dirname, 'src/constant')
    }
  }
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
