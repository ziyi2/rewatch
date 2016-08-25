# rewatch

## browser和nodejs支持ES6

### 安装webpack

```javascript
npm install -g webpack
```

### 浏览器端配置

#### webpack.browser.config
由于服务器端的配置相对比较麻烦，先来配置浏览器端的webpack文件，在`Express`项目的根目录下新建配置文件`webpack/dev/webpack.browser.config`



#### package.json

`package.json`文件的配置

```javascript
  "scripts" : {
    "dev" : "parallelshell \"npm run webpack-node\" "，
    "webpack-node" : "webpack --config ./webpack/dev/webpack.browser.config.js --progress --watch --colors"
  }
```

| 参数      |     说明 |
| :-------- | :--------|
| `parallelshell`    |   因为之后还要引入`node`端的`webpack`配置执行文件，所以这里需要并行执行`shell`命令 |
| `--config`    | 使`webpack`命令不再执行`webpack.config.js`而是执行指定的`webpack`配置文件   |
| `--progress --watch`    | 使打包处于监听状态，但是之后可以使用`web-dev-server`替换这种监听状态   |
| `colors`    | 当然也可以让输出的日志高亮显示 |

目前的启动命令
``` javascript
npm run dev
```


>提示: `parallelshell`是`GNU`工具的一员，是`shell`的并行化处理神器，好像目前是跑在`Linux`上的， 且`parallelshell 'npm run webpack-node'`是不能执行的，必须使用`parallelshell "npm run webpack-node"`，所以需要对`"`进行转义

为了能在windows下跑`parallelshell`命令，需要全局安装以下依赖模块

```javascript
npm install -g parallelshell
```

此时可以手动测试模块是否可以正常运行

```javascript
parallelshell　"npm run webpack-node"
```























### 查看nodejs本身对ES6的支持程度

首先查看当前`nodejs`环境对于`ES6`的支持程度

```javascript
npm install es-checker -g
```

运行查看支持程度

```javascript
es-checker
```

也可以升级到最新稳定版的`node`

```javascript
npm install -g n
n stable
```

结论: 目前最新稳定版本的`node`[`v6.4.0`]仍然不支持`import`以及`export`，需要使用`webpack`和`babel`插件进行打包处理























//这个配置连接有用!
http://www.tuicool.com/articles/zEZneuq


