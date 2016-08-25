# rewatch

## browser和nodejs支持ES6

### 安装webpack

```javascript
npm install -g webpack
```

由于服务器端的配置相对比较麻烦,先来配置浏览器端的webpack文件,在`Express`项目的根目录下新建配置文件`webpack/dev/webpack.browser.config`,输入配置信息







### 初步配置package.json

当然,由于目前最新稳定版本的`node`[`v6.4.0`]仍然不支持`import`以及`export`,需要使用`webpack`打包处理,首先需要在`Express`项目的根目录下新建配置文件`webpack/dev/webpack.node.config`,然后在`package.json`文件中写入以下配置

```javascript
  "scripts" : {
    "dev" : "parallelshell \"npm run webpack-node\" ",
    "webpack-node" : "webpack --config ./webpack/dev/webpack.node.config.js --progress --watch --color"
  }
```
说明:

- `parallelshell` 
因为之后还要引入浏览器端的`webpack`配置执行文件,所以这里需要并行执行`shell`命令

- `--config`
`webpack —config webpack.custom.config.js`使`webpack`命令不再执行`webpack.config.js`而是执行我们指定的`webpack`配置文件

- `--progress --watch`
使打包处于监听状态,但是之后可以使用`nodemon`替换这种监听状态

- `color`
当然也可以让输出的日志高亮显示

- 启动命令
`npm run dev`


>提示: `parallelshell`是`GNU`工具的一员,是`shell`的并行化处理神器,好像目前是跑在`Linux`上的,坑爹了! 并且`parallelshell 'npm run webpack-node'`是不能执行的,必须使用`parallelshell "npm run webpack-node"`,所以需要对`"`进行转义

为了能在windows下跑`parallelshell`命令,辛亏有大神开发了这个模块

```javascript
npm install -g parallelshell
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

结论: 目前最新稳定版本的`node`[`v6.4.0`]仍然不支持`import`以及`export`,需要使用`webpack`和`babel`插件进行打包处理























//这个配置连接有用!
http://www.tuicool.com/articles/zEZneuq


