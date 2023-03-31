## react-antd-typescript-starter (vite + react + ts 模版)

![build](https://github.com/qqxs/react-antd-typescript-starter/workflows/build/badge.svg)

### 项目使用

```sh
git clone git@github.com:qqxs/react-antd-typescript-starter.git
```

## 可用脚本

```sh
# 安装项目依赖
# only allow pnpm
pnpm install

# development environment
# 开启开发环境react 编译
pnpm run dev

# production environment
# 开始编译生产环境
pnpm run build

# production environment analyzer
# 开始编译生产环境并输出分析
pnpm run analyzer

# eslint fix code
# 对部分不符合eslint 语法进行修复
# 注意⚠️: 不是所有的错误都会修复，部分还是要手动修复
pnpm run fix

# eslint lint code
# 进行eslint语法检查, 如果有错会在控制中指出
pnpm run lint

# prettier format code
# 使用prettier 代码进行格式化
pnpm run fmt

# test
pnpm run test

# 首先要安装nginx镜像
# docker nginx deploy
# http://localhost:8000
docker-compose up -d
```

## src 目录

```bash
.
├── assets      # @/assets/xxx
│   ├── FE.png
│   └── react.svg
├── components  # @/components 公共组件
│   ├── Auth    # 需要权限
│   ├── ErrorBoundary  # ErrorBoundary
│   └── Layout  # `/`路由的element
├── constant    # @/constant 全局变量
├── hooks       # @/hooks
│   └── redux.ts # redux 相关hook
├── main.tsx    # 入口
├── services      # @/services  api 接口
├── page        # 页面
│   ├── error   # 错误页
│   ├── home    # 首页
│   ├── login   # 登录页
│   └── register
├── router.tsx  # 路由
├── sentry.ts   # sentry config
├── store       # redux store
│   ├── index.ts
│   └── reducer
├── styles
│   ├── antd-theme.scss #antd 主题
│   └── theme.scss  # 项目自定义主题
├── utils
│   ├── Axios.ts   # axios封装
│   └── auth.ts
└── vite-env.d.ts
```

## 自定义组件

自定义组件放在`src/components`下 ，希望在每个组件同级目录下都添加一个 example

## 主题

如果需要 [antd5 主题](https://ant.design/docs/react/customize-theme-cn)，请更改[src/styles/antd-theme.scss](./src/styles/antd-theme.scss)文件

如果使用`less`, 请安装 [less-vars-to-js](https://www.npmjs.com/package/less-vars-to-js) 自行调试。

```ts
import lessToJs from 'less-vars-to-js';
import { lowerCamel } from '@skax/camel';
import fs from 'fs';

/**
 * less 变量转成 json 格式
 *
 * @example
 *
 * lessVar2JSON()  // {"colorPrimary": "#00b96b, borderRadius: '2px'}
 *
 * @returns Object
 */
function lessVar2JSON() {
  // Read the less file in as string
  const paletteLess = fs.readFileSync('./src/styles/antd-theme.less', 'utf-8');
  // Pass in file contents
  const palette = lessToJs(paletteLess, {
    resolveVariables: true,
    stripPrefix: true,
  });

  return Object.keys(palette).reduce((pre, cur) => {
    pre[lowerCamel(cur, '-')] = palette[cur];
    return pre;
  }, {});
}
export default lessVar2JSON;
```

## api

[gin_serve api](https://github.com/freeshineit/gin_serve)

## sentry

在[vite.config.ts](./vite.config.ts)中开启 sentry, 并在[src/sentry.tsx](./src/sentry.ts) 中配置。

**请不要让项目 面向 any 编程 谢谢 🙏**
