# rewatch

## browser和nodejs支持ES6

### 安装webpack

```javascript
npm install -g webpack
```

### 安装支持ES6的模块

For ES6/ES2015 support

```javascript
npm install babel babel-core babel-loader --save-dev
```

```javascript
npm install babel-preset-es2015 --save-dev  //Babel’s collection of ES6 transforms
```

If you’re using JSX

```javascript
npm install babel-preset-react --save-dev  
```

for access to `ES7` `decorators`, `async / await` , etc

```javascript
npm install babel-preset-stage-0 --save-dev
```

Babel can’t support all of ES6 with compilation alone — it also requires some runtime support. In particular, the new ES6 built-ins like Set, Map and Promise must be polyfilled, and Babel’s generator implementation also uses a number of runtime helpers. Given your app doesn’t have to share a JavaScript environment with other apps, you’ll be ok to use babel-polyfill to handle this:

`Babel`默认只转换新的`JavaScript`句法（`syntax`），而不转换新的`API`，比如`Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise`等全局对象，以及一些定义在全局对象上的方法（比如`Object.assign`）都不会转码。
举例来说，`ES6`在`Array`对象上新增了`Array.from`方法。`Babel`就不会转码这个方法。如果想让这个方法运行，必须使用`babel-polyfill`，为当前环境提供一个垫片

```javascript
npm install babel-polyfill --save-dev
```

Babel also bakes a number of smaller helpers directly into your compiled code. This is OK for single files, but when bundling with Webpack, repeated code will result in a heavier file size. It is possible to replace these helpers with calls to the babel-runtime package by adding the transform-runtime plugin:


```javascript
npm install babel-runtime --save
npm install babel-plugin-transform-runtime --save-dev
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


