## react-antd-typescript-starter (react 模版)


### 项目使用

```sh
git clone git@github.com:qqxs/react-antd-typescript-starter.git
```

## 可用脚本

```sh
# 安装项目依赖
npm install

# development environment
# 开启开发环境react 编译
npm run dev

# 开始编译测试或生产环境
npm run build

# eslint fix code
# 对部分不符合eslint 语法进行修复
# 注意⚠️: 不是所有的错误都会修复，部分还是要手动修复
npm run fix

# elist lint code
# 进行eslint语法检查, 如果有错会在控制中指出
npm run lint

# prettier format code
# 使用prettier 代码进行格式化
npm run fmt

# docker nginx deploy
# http://localhost:8000
docker-compose up -d
```

## 自定义组件

自定义组件放在`src/components`下 ，希望在每个组件同级目录下都添加一个 example


## 主题

如果需要 [antd 主题](https://ant.design/docs/react/customize-theme-cn)，请更改`[src/styles/theme.ts](./src/styles/theme.ts)`文件


**请不要让项目 面向 any 编程 谢谢 🙏**
