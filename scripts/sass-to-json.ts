import fs from 'fs';
import path from 'path';
import { lowerCamel } from '@skax/camel';

/**
 * 自动读取 ./src/styles/themes 下的 sass 文件，
 * sass 变量转成 json 格式 (主题样式更新需要重启)
 *
 * Automatic reading sass file under src/styles/themes,
 * Convert the sass variable to JSON format
 *
 *
 * @example
 * ```scss
 * // -> colorPrimary: #000
 * --color-primary: #000;
 * // -> borderRadius: 4
 * --border-radius: 4px;
 * ```
 *
 * ```ts
 *  sassVar2JSON()  //  -> {"colorPrimary": "#00b96b", borderRadius: 4}
 * ```
 *
 * @returns {Object}
 */
function sassVar2JSON() {
  const result = {
    tokens: {},
    vars: {},
  };
  //
  walkSync('./src/styles/themes', function (filePath: string, stat) {
    const name = stat.name.replace(/.scss|.sass/, '');
    const paletteSass = fs.readFileSync(filePath, 'utf-8');

    // 按行拆分文件内容
    const lines = paletteSass.split('\n');
    const vars: string[] = lines.filter(line => /^--/.test(line.replace(/ /gi, '')));
    result.vars[name] = vars.join('');

    // 处理每一行
    const antdToken = vars
      .map(line => convertToSassVariable(line.replace(/ /gi, '')))
      .reduce((pre, cur) => {
        const kv: string[] = cur.replace(/(\d+)px;/g, '$1;').split(':');

        pre[lowerCamel(kv[0], '-')] = kv[1].replace(/;$/, '');
        return pre;
      }, {});
    result.tokens[name] = antdToken;
  });
  return result;
}

function walkSync(currentDirPath: string, callback) {
  // http://nodejs.cn/api/fs.html#fsreaddirsyncpath-options
  // http://nodejs.cn/api/fs.html#class-fsdirent 新增于: v10.10.0
  fs.readdirSync(currentDirPath, { withFileTypes: true }).forEach(function (dirent) {
    const filePath = path.join(currentDirPath, dirent.name);
    if (dirent.isFile()) {
      callback(filePath, dirent);
    }
    // else if (dirent.isDirectory()) {
    //   walkSync(filePath, callback);
    // }
  });
}

// 将 CSS 变量名转换为 SASS 变量名
function convertToSassVariable(line) {
  return line.replace(/(--[a-z0-9-]+)/gi, match => {
    return `${match.substring(2)}`;
  });
}

export default sassVar2JSON;
