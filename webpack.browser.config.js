'use strict';

var webpack = require('webpack');
var path = require('path');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

console.log('webpack.browser.config start running...' );

module.exports = {

    target: 'web',

    entry: {
        index: './client/javascript/none-flux-src/index/index.js',
        flux_index: './client/javascript/flux-src/index/index.jsx',
        router_index: './client/javascript/router-browser-src/index.jsx',
        router_server_index: './client/javascript/router-server-src/index.jsx',
        redux_index: './client/javascript/redux-src/counter/index.jsx',
        redux_index_todos: './client/javascript/redux-src/todos/index.jsx',
        redux_index_todos_example: './client/javascript/redux-src/todos-example/index.js'
        //flux_to_do_list_index: './client/javascript/flux-todoList-src/index/index.jsx'
    },

    output: {
        path: './public/js',
        filename: "[name].js",
        publicPath: '/'
    },

    externals: {    //使用自己带的库(需要在html中加载),遇到require的时候不用,只用全局变量
        'react': 'React',
        'react-dom': 'ReactDOM'
    },

    resolve: {      //require的时候可以省略后缀
        extensions: ['', '.js', '.jsx']
    },

    //context: __dirname,
    //
    //node: {
    //    __filename: false,
    //    __dirname: false
    //},

    module: {
        loaders: [
            {

                test: /\.js[x]?$/,
                exclude: /node_modules/,

                //exclude: [
                //    path.resolve(__dirname, "node_modules")
                //],   //调试两天的问题出不来就出在这里!


                //霄哥的配置项
                //loader: 'babel-loader?presets[]=es2015&presets[]=react'

                //我的配置项
                loader: 'babel-loader',
                query: {
                    //plugins: ['babel-plugin-transform-runtime'],  //此项虽然对于编译代码非常有些帮助,但是会产生额外的重复负担代码
                    presets:['es2015','stage-0','stage-2','react']  //此项可以省略而是添加在.babelrc文件,但是官方建议保留在这里
                }
            }
        ]
    },

    plugins: [
        commonsPlugin
        //new webpack.optimize.DedupePlugin(),
        //new webpack.optimize.OccurrenceOrderPlugin(),
        //new webpack.optimize.UglifyJsPlugin()
    ]   //打包多个入口文件时会提取出公用的部分，生成common.js
};








