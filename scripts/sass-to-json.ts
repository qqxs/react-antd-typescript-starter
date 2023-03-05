import fs from 'fs'

import sassVars from 'get-sass-vars'

function toCamel(name) {
  // eslint-disable-next-line no-useless-escape
  return name.replace(/\-(\w)/g, function (all, letter) {
    return letter.toUpperCase()
  })
}

/**
 * sass 变量转成 json 格式
 *
 * @example
 *
 * sassVar2JSON()  // {"colorPrimary": "#00b96b, borderRadius: '2px'}
 *
 * @returns Object
 */
function sassVar2JSON() {
  const css = fs.readFileSync('./src/styles/antd-theme.scss', 'utf-8')

  const result = sassVars.sync(css)

  return Object.keys(result).reduce((pre, cur) => {
    pre[toCamel(cur.replace('$', ''))] = result[cur]
    return pre
  }, {})
}

export default sassVar2JSON
