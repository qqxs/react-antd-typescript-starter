## create-react-app-craco (react 模版)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 远程测试地址 (以实际测试地址为准)

### 项目使用

1. 安装 [node](https://nodejs.org/zh-cn/) (>= 10)

2. [pm2](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/)

3) nginx 配置

```sh
# 项目服务配置
server {
    listen       80; # 新项目要更换端口
    server_name  localhost;

    # 远程服务地址
    # api 服务代理
    location ~ /(api|simg)/ {
      # https://scrm-qa666.mianchao.com 远程api 地址
        proxy_pass https://www.shineshao.com;
    }
}
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


# production | release environment
# 开始编译测试或生产环境 的dll 文件
# 打包一次就可以了
npm run dll

# production | release environment
# 开始编译测试或生产环境
npm run build

# development environment node socket server
# 启动本地node开发环境
# 注意⚠️: 如果你开发node最好使用这个命令，因为它会自动重启和在控制太打印日志方便开发和调试
# 开启开发环境 前提是全局安装了pm2
npm run pm2:dev

# production | release environment node socket server
# 启动pm2服务 可以选择环境[release| production]
npm run pm2

# stop | delete pm2 node socket server
# 停止或删除 pm2 node socket 服务
npm run pm2:stop

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
```

## .gitignore

请记得把`.gitignore`文件中的`resources`忽略去掉

## 自定义组件

自定义组件放在`src/components`下 ，希望在每个组件同级目录下都添加一个 example

## 库

- [react@16.13.x](https://zh-hans.reactjs.org/)

- [antd@4.x](https://ant.design/index-cn)

  - antd 单独的图标库 [@ant-design/icons](https://ant.design/components/icon-cn/) （如需使用请安装）

## [craco](https://github.com/gsoft-inc/craco)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

**请不要让项目 面向 any 编程 谢谢 🙏**
