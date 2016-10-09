# rewatch

## Start

启动方式

```javascript
npm run dev     //webpack
npm start       //node app
```


Make sure your server is running then visit [http://localhost:3000](http://localhost:3000)

>Tip: you should install `pm2` to manager the App's process, install `webpack-dev-server` to watch the files.


stop the App

```javacript
npm stop
```

## React Flux

```javascript
npm install flux --save
```

example
- none-flux-src
- flux-src


## React Router

```javascript
npm install react-router --save
```

服务器端渲染

```javascript
npm run webpack
npm run start-server
```

examples
- router-browser-src
- router-server-src


## React Redux

```javascript
npm install react-redux redux --save
```

examples

- redux-src/counter
- redux-src/todos-test
- redux-src/todos
- redux-src/todos-with-undo
- redux-src/todos-mvc
- redux-src/async
- [redux-server-render](https://github.com/ziyi2/rewatch-server-render)

## Test
- karma:测试管理工具
- mocha:测试库
- enzyme:
- chai:断言库
- sinon
- phantomjs:测试浏览器

```javascript
#Install Karma
npm install karma --save-dev
npm install karma-cli -g

#Install mocha chai
npm install mocha chai --save-dev

#Install Karma plugins
npm install karma-mocha karma-chai --save-dev

#Install plugins that your project needs:
npm install karma-mocha karma-chai karma-chrome-launcher --save-dev

#karma-webpack
npm install karma-webpack --save-dev
```





## Link

### website
- [react](https://facebook.github.io/react/index.html)
- [webpack](https://webpack.github.io/docs/)
- [React示例](http://www.kancloud.cn/kancloud/create-voting-app/63976)
- [Flux](http://www.ruanyifeng.com/blog/2016/01/flux.html)
- [React-Router入门教程](http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu)
- [React-Router中文文档](http://react-guide.github.io/react-router-cn/docs/Introduction.html)
- [Redux中文文档](http://cn.redux.js.org/index.html)
- [Redux英文文档](http://redux.js.org/docs/advanced/UsageWithReactRouter.html)
- [Karma](http://karma-runner.github.io/1.0/index.html)
- [Karma,Webpack](http://www.tuicool.com/articles/jMvmEzI)
- [mocha](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)
- [Test Driven React Tutorial](http://spencerdixon.com/blog/test-driven-react-tutorial.html?utm_campaign=Front+End+Newsletter&utm_medium=email&utm_source=Front_End_Newsletter_2)

### github

#### Base
- [webpack](https://github.com/webpack/webpack)
- [flux](https://github.com/facebook/flux)
- [flux-demo](https://github.com/ruanyf/extremely-simple-flux-demo)
- [react-router-tutorial](https://github.com/reactjs/react-router-tutorial/tree/master/lessons)
- [react-router-expamle](https://github.com/reactjs/react-router/tree/latest/examples)
- [redux](https://github.com/reactjs/redux)
- [redux-tutorial](https://github.com/react-guide/redux-tutorial-cn)
- [react-redux-tutorial](https://github.com/lewis617/react-redux-tutorial)
- [karma-mocha](https://github.com/karma-runner/karma-mocha.git)
- [react-testing-starter-kit](https://github.com/SpencerCDixon/react-testing-starter-kit)


#### Project
- [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit)
- [relax](https://github.com/relax/relax)
- [react-server-example](https://github.com/mhart/react-server-example)
- [react_and_redux_and_router_example](https://github.com/zjy01/react_and_redux_and_router_example)

### Next...
- [react-router-redux(not necessary)](https://github.com/reactjs/react-router-redux)