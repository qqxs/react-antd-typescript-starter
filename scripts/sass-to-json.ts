import { extractSync } from 'sass-vars-to-json2'

function toCamel(name) {
  return name.replace(/\-(\w)/g, function (all, letter) {
    return letter.toUpperCase()
  })
}

function Sass2JSON() {
  let theme = extractSync('./src/styles/antd-theme.scss')
  return Object.keys(theme).reduce((pre, cur) => {
    pre[toCamel(cur.replace('$', ''))] = theme[cur]
    return pre
  }, {})
}

export default Sass2JSON
