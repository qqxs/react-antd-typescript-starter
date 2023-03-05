import fs from 'fs'

function toCamel(name) {
  // eslint-disable-next-line no-useless-escape
  return name.replace(/\-(\w)/g, function (all, letter) {
    return letter.toUpperCase()
  })
}

const RAW_VAR_REGEX = /\$([a-z][a-z0-9-]*):\s*([^;]*);/gi

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
  const content = fs.readFileSync('./src/styles/antd-theme.scss').toString()

  const variables = {}
  let match

  while ((match = RAW_VAR_REGEX.exec(content)) !== null) {
    const [, variable, value] = match
    variables[toCamel(variable as string)] = value.trim()
  }
  return variables
}

export default sassVar2JSON
