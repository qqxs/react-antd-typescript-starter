const colors = require('colors')
const path = require('path')
const fs = require('fs-extra')
const antdTheme = require('../antd-theme')

/**
 * @desc 把antd-theme.js 中内容转化为 antd-theme.scss 中的值
 *
 * @returns {Promise}
 */
function antdThemejs2Scss() {
  // 把antd-theme.js 中内容转化为 antd-theme.scss 中的值
  console.log(
    colors.green('把antd-theme.js 中内容转化为 antd-theme.scss 中的值')
  )

  return new Promise((resolve, reject) => {
    const theme =
      JSON.stringify(antdTheme)
        .replace(/",/gi, ';\n')
        .replace(/@/gi, '$')
        .replace(/:/gi, ': ')
        .replace(/\{|\}|"/gi, '') + ';'

    // 注释
    const notes = `// antd 4.x 主题 这个文件有antd-theme.js 生成 ，请不要手动更改这个文件
// 如要更新 请更新 antd-theme.js 文件
// 修改 antd-theme.js 文件 需要重新运行执行命令（webpack）\n\n`

    const antdThemeScssPath = path.resolve('./', 'src/style/antd-theme.scss')

    fs.writeFile(antdThemeScssPath, notes + theme, 'utf8', function (error) {
      if (error) {
        console.log(colors.red.underline('\n antd-theme.scss 文件创建失败\n'))
        reject(error)
      }
      console.log(colors.green('antd-theme.scss 写入成功'))

      resolve()
    })
  })
}

antdThemejs2Scss()
