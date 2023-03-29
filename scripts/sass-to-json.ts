import fs from 'fs';

import sassVars from 'get-sass-vars';
import { lowerCamel } from '@skax/camel';

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
  const paletteSass = fs.readFileSync('./src/styles/antd-theme.scss', 'utf-8');

  const result = sassVars.sync(paletteSass);

  return Object.keys(result).reduce((pre, cur) => {
    pre[lowerCamel(cur.replace('$', ''), '-')] = result[cur];
    return pre;
  }, {});
}

export default sassVar2JSON;
