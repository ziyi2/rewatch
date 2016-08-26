
'use strict';

var webpack = require('webpack');
var path = require('path');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {

    name: 'browser',

    //具体查看http://www.cnblogs.com/hhhyaaon/p/5657469.html
    // devtool: 'eval',

    entry: {
        // Set up an ES6-ish environment
        //'babel-polyfill',   //类似于import 'babel-polyfill'
        index: ['./client/javascript/src/index/index.js']
    },

    output: {
        path: './client/javascript/dist',
        filename: "[name].js",
        publicPath: 'http://localhost:3000/client/javascript/dist/'             //http://webpack.github.io/docs/configuration.html#output-publicpath
    },


    externals: {
        //使用自己带的库(需要在html中加载),遇到require的时候不用,只用全局变量
        'react': 'React',
        'react-dom': 'ReactDOM',
    },

    resolve: {
        //require的时候可以省略后缀
        extensions: ['', '.js', '.jsx'],
        // alias: {
        //     //后续直接 require('AppStore') 即可
        //     //AppStore : 'js/stores/AppStores.js',
        // }
    },

    module: {
        loaders: [
            {

                //排除不处理的目录
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                ],
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                query: {
                    //cacheDirectory: true,
                    plugins: ['transform-runtime'],
                    presets:['es2015','stage-0','react']
                }
            }
        ]
    },

    plugins: [commonsPlugin]  //打包多个入口文件时会提取出公用的部分，生成common.js
};






