
'use strict';

var webpack = require('webpack');
var path = require('path');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {

    name: 'browser',
    devtool: 'eval',    //具体查看http://www.cnblogs.com/hhhyaaon/p/5657469.html

    entry: {
        index: ['./client/javascript/src/index/index.js']
    },

    output: {
        path: './client/javascript/dist',
        filename: "[name].js"
                        //publicPath这个属性先保留 http://webpack.github.io/docs/configuration.html#output-publicpath
    },
    externals: {        //使用自己带的库(需要在html中加载),遇到require的时候不用,只用全局变量
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],            //require的时候可以省略后缀
        alias: {
            //AppStore : 'js/stores/AppStores.js',  //后续直接 require('AppStore') 即可
        }
    },
    module: {
        loaders: [
            {
                // Skip any files outside of your project's `src` directory
                // include: [
                //    path.resolve(__dirname, "/Todolist_11/src"),
                // ],
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                ],
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets:['es2015','react']   //因为这个没装,浪费了我两天时间
                    //npm install babel babel-core --save-dev
                    //npm install babel-loader babel-preset-es2015 --save-dev
                    //npm install babel-preset-react --save-dev
                    //If you want to use experimental ES7 features
                    //npm install babel-preset-stage-0 --save-dev
                    //npm install babel-polyfill --save
                    //npm install babel-runtime --save
                    //npm install babel-plugin-transform-runtime --save-dev
                }
            },{
                // include: [
                //    path.resolve(__dirname, "/Todolist_11/src"),
                // ],
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                ],
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets:['es2015','react']
                }
            }
        ]
    },
    plugins: [commonsPlugin]  //打包多个入口文件时会提取出公用的部分，生成common.js
};






