var webpack = require('webpack');
var fs = require('fs');
var path = require('path');

module.exports = {

  entry: path.resolve(__dirname, 'server.js'),

  output: {
    filename: 'server.bundle.js'
  },

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server'
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  resolve: {      //require的时候可以省略后缀
    extensions: ['', '.js', '.jsx']
  },

  node: {
    __filename: false,
    __dirname: false
  },

  module: {
    // loaders: [
    //   { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=stage-0&presets[]=react' }
    // ]
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

    }

}

