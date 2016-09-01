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
        flux_to_do_list_index: './client/javascript/flux-todoList-src/index/index.jsx'
    },

    output: {
        path: './client/javascript/dist',
        filename: "[name].js"
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
                    presets:['es2015','stage-0','react']  //此项可以省略而是添加在.babelrc文件,但是官方建议保留在这里
                }
            }
        ]
    },

    plugins: [commonsPlugin]   //打包多个入口文件时会提取出公用的部分，生成common.js
};








