# docz-plugin-mock

[Docz](https://github.com/pedronauck/docz)的mock插件，调试组件时提供服务端模拟数据。

## 如何使用

在配置好docz的项目中

```sh
yarn add docz-plugin-mock

# 或者

npm install --save docz-plugin-mock
```

配置docz插件

```js
// /doczrc.js
import mock from "docz-plugin-mock"

export default {
    plugins:[
        mock()
    ]
}

```

`/mock`目录下添加mock数据文件。

```js
// /mock/user.js

export default {
    'GET /api/user': {
      name: 'fuyun'
    }
}
```

运行docz开发服务

```sh
yarn docz dev
```

浏览器访问 <http://localhost:3000/api/user> 显示

```json
{
    "name": "fuyun"
}
```

成功。

## 发布

记录发布命令备忘。

```sh
yarn publish --registry https://registry.npmjs.org
```

## 参考

Mock数据设置方法:<https://umijs.org/guide/mock-data.html>
