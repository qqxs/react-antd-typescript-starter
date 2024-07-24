## react-antd-typescript-starter

![build](https://github.com/qqxs/react-antd-typescript-starter/workflows/build/badge.svg)

vite + react + ts + redux template

### Use

```sh
git clone git@github.com:qqxs/react-antd-typescript-starter.git

cd react-antd-typescript-starter

pnpm install
```

## Scripts

```sh
# 安装项目依赖
# only allow pnpm
pnpm install

# 开启开发环境react 编译
# start development environment
pnpm run dev

# 开始编译生产环境
# production environment
pnpm run build

# 开始编译生产环境并输出分析
# production environment analyzer
pnpm run analyzer

# 对部分不符合eslint 语法进行修复
# 注意⚠️: 不是所有的错误都会修复，部分还是要手动修复
# eslint fix code
pnpm run fix

# 进行eslint语法检查, 如果有错会在控制中指出
# eslint lint code
pnpm run lint

# 使用prettier 代码进行格式化
# prettier format code
pnpm run fmt

# test
pnpm run test

# 首先要安装nginx镜像
# docker nginx deploy
# http://localhost:8000
# docker-compose up -d
docker compose up -d
```

## src

```bash
.
├── assets      # @/assets/xxx assets source
│   ├── FE.png
│   └── react.svg
├── components  # @/components common components
│   ├── Auth    # auth
│   ├── ErrorBoundary  # ErrorBoundary
│   └── Layout  # layout
├── constant    # @/constant constant
├── hooks       # @/hooks
│   ├── useTheme.ts   # theme hooks
│   └── redux.ts # redux hooks
├── main.tsx    # entry
├── services    # @/services  api
├── pages       # pages
│   ├── error   # error page
│   ├── home    # home page
│   ├── login   # login page
│   └── register # register page
├── router.tsx  # router tree
├── sentry.ts   # sentry config
├── store       # redux store
│   ├── index.ts
│   └── features # redux state
├── styles
│   ├── themes      # antd theme file
│   └── theme.scss
├── utils
│   ├── Axios.ts   # axios
│   └── auth.ts
└── vite-env.d.ts
```

## Components

自定义组件放在`src/components`下

Place custom components under `src/components`

## Themes

如果需要修改[antd5 主题](https://ant.design/docs/react/customize-theme-cn)，请更改[src/styles/themes](./src/styles/themes)下文件

If it is necessary to modify the [antd5 theme](https://ant.design/docs/react/customize-theme-cn), Please modify the [src/styles/themes](./src/styles/themes) file.

```scss
// https://ant.design/docs/react/customize-theme-cn
// default.scss
:root {
  --color-primary: #00b96b; // -> colorPrimary: #00b96b
  --border-radius: 4px; // -> borderRadius: 2px
}
```

[scripts/sass-to-json.ts](./scripts/sass-to-json.ts) 转换 [src/styles/themes](./src/styles/themes)下文件为下面对象格式

```json
{
  "theme" {
    "tokens": {
      "dark": {
        "colorPrimary": "#000",
        "borderRadius": "4px",
      },
      "default": {
        "colorPrimary": "#00b96b",
        "borderRadius": "4px"
      }
    },
    "vars": {
      "dark": "  --color-primary: #000;  --border-radius: 4px;",
      "default": "  --color-primary: #00b96b; --border-radius: 4px;"
    }
  }
}
```

css 变量在切换主题时自动注入到 `head` 下，保证 antd@5.x 主题 token 变量和css 变量对应

`head` 下 `style` 标签

```html
<!-- $____theme____$ 是唯一id -->
<style id="$____theme____$" data-theme="default">
  :root {
    --color-primary: #00b96b;
    --border-radius: 4px;
  }
</style>
```

警告⚠️： 主题文夹下文件中仅支持 css 变量

<!-- 如果使用`less`, 请安装 [less-vars-to-js](https://www.npmjs.com/package/less-vars-to-js) 按照下面 👇 代码自行调试。

If using `less`, please install [less-vars-to-js](https://www.npmjs.com/package/less-vars-to-js) According to the following 👇 Code self debugging.

````ts
import lessToJs from 'less-vars-to-js';
import { lowerCamel } from '@skax/camel';
import fs from 'fs';

/**
 * less 变量转成 json 格式 (更改 antd 主题样式更新需要重启)
 * Convert the less variable to JSON format
 *
 * @example
 *
 * ```less
 *   $color-primary: #00b96b;
 *   $border-radius: 2px;
 * ```
 *
 * ```js
 * lessVar2JSON()  //  -> {"colorPrimary": "#00b96b", "borderRadius": "2px"}
 * ```
 *
 * @returns {Object}
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
```` -->

## Api

[gin_serve api](https://github.com/freeshineit/gin_serve)

## Sentry

在[vite.config.ts](./vite.config.ts)中开启`OPEN_SENTRY=true`, 并在[src/sentry.tsx](./src/sentry.ts) 中配置 `__DSN__`。
