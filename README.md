## react-antd-typescript-starter (react 模版)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
npm run start

# development environment
# 开启开发环境react 编译
npm run dev


# 开始编译测试或生产环境 的dll 文件
# 打包一次就可以了
npm run dll

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
npm run format

# test env
npm run test

# docker nginx deploy
# http://localhost:8000
docker-compose up -d
```

## 自定义组件

自定义组件放在`src/components`下 ，希望在每个组件同级目录下都添加一个 example

## 库

- [react@16.14.x](https://zh-hans.reactjs.org/)

- [antd@4.x](https://ant.design/index-cn)

  - antd 单独的图标库 [@ant-design/icons](https://ant.design/components/icon-cn/) （如需使用请安装）

## [craco](https://github.com/gsoft-inc/craco)

## 主题

如果需要 antd 主题，请更改`[src/styles/antd-theme.scss](./src/styles/antd-theme.scss)`文件， 更改后请重新启动 （最好不要添加和 antd 注意不相关的变量）

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

**请不要让项目 面向 any 编程 谢谢 🙏**
